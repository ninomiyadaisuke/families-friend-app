import _ from 'lodash';
import type { NextApiHandler } from 'next';
import { v4 as uuidv4 } from 'uuid';

import { sendToFireStoreProfileSchema } from '@/features/profile/schema';
import { removeUndefinedProperties } from '@/libs/helper';
import { auth, typedFirestore } from '@/server/firebase/firebaseAdmin';
import { imageSaveToReturnUrl } from '@/server/libs/serverUtils';

const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method !== 'POST') return res.status(404).send('Not Found');
    const cookies = req.cookies['session'];
    if (!cookies) return;

    const { inputData, cacheData, files } = sendToFireStoreProfileSchema.parse(req.body);
    const { uid, family_id: familyId, members } = inputData;

    // cookieを検証
    const decodedToken = await auth.verifySessionCookie(cookies, true);
    if (decodedToken.uid !== uid) {
      return res.status(403).send('Forbidden');
    }

    const publicUrl = await imageSaveToReturnUrl('users', files.userFile);
    const userData = _.omit(inputData, ['members']);

    if (publicUrl) {
      const imageId = uuidv4();
      const id = userData.image?.id;
      userData.image = { id: id || imageId, path: publicUrl };
    }
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
      const publicUrlPromises = files.membersFile.map(async (file) => {
        if (!file) return;
        const publicUrl = await imageSaveToReturnUrl('members', file);
        if (!publicUrl) return;
        return { id: file.id, url: publicUrl };
      });
      const membersFile = await Promise.all(publicUrlPromises);
      for (const encodedFile of membersFile) {
        if (!encodedFile) return;
        const imageId = uuidv4();
        const id = member?.image?.id;
        member.image = { id: id || imageId, path: encodedFile.url };
      }
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
    return res.status(500).send('Internal Server Error');
  }
};

export default handler;
