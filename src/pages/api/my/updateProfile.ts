import { storage } from 'firebase-admin';
import _ from 'lodash';
import type { NextApiHandler } from 'next';

import { EncodedFile } from '@/features/profile/apis/editProfile';
import { sendToFireStoreProfileSchema } from '@/features/profile/schema';
import { removeUndefinedProperties } from '@/libs/helper';
import { auth, typedFirestore } from '@/server/firebase/firebaseAdmin';

const imageSaveToReturnUrl = async (file?: EncodedFile) => {
  if (!file) return;
  const filename = file?.filename;
  const image = file.encodedString;
  const folderPath = 'users';
  const bucketName = 'families-app-e1d8f.appspot.com';
  const buffer = Buffer.from(image, 'base64');
  const files = storage().bucket(bucketName).file(`${folderPath}/${filename}`);
  await files.save(buffer);
  // Firebase Storageの公開URLを構築
  const encodedFilePath = encodeURIComponent(`${folderPath}/${filename}`);
  const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodedFilePath}?alt=media`;
  return publicUrl;
};

const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method !== 'POST') return res.status(404).send('Not Found');
    const cookies = req.cookies['session'];
    if (!cookies) return;

    const { inputData, cacheData, file } = sendToFireStoreProfileSchema.parse(req.body);
    const { uid, family_id: familyId, members } = inputData;

    // cookieを検証
    const decodedToken = await auth.verifySessionCookie(cookies, true);
    if (decodedToken.uid !== uid) {
      return res.status(403).send('Forbidden');
    }

    const publicUrl = await imageSaveToReturnUrl(file);

    const userData = _.omit(inputData, ['members']);
    const cachedUserData = _.omit(cacheData, ['members']);
    const cachedMembersData = cacheData?.members;
    // オブジェクトの中にあるundefinedを削除する
    const cleanedUserData = removeUndefinedProperties(userData);

    // userData, cachedUserData二つのオブジェクトをチェックし差異があれば userを更新する
    const isUserUpdated = !_.isEqual(userData, cachedUserData);
    if (isUserUpdated) {
      await typedFirestore.collection('users').doc(uid).setMerge(cleanedUserData);
    }

    const householdMemberCollection = typedFirestore
      .collection('families')
      .doc(familyId)
      .collection('household_member');

    for (const member of members) {
      const memberId = member?.id || householdMemberCollection.doc().id;
      const memberData = {
        ...member,
        id: memberId,
      };

      const cacheMembers = cachedMembersData || [];

      const cleanedMemberData = removeUndefinedProperties(memberData);
      try {
        const memberDoc = await householdMemberCollection.doc(memberId).get();
        if (memberDoc.exists()) {
          const isMemberUpdated = !cacheMembers.some((cachedMember) => _.isEqual(member, cachedMember));
          if (isMemberUpdated) {
            await householdMemberCollection.doc(memberId).setMerge(cleanedMemberData);
          }
        } else {
          await householdMemberCollection.doc(memberId).create(cleanedMemberData);
        }
      } catch (error) {
        throw new Error('Failed to update household member data');
      }
    }
    return res.status(200).send('Success');
  } catch (error) {
    // console.error(error);
    return res.status(500).send('Internal Server Error');
  }
};

export default handler;
