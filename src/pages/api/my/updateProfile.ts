import _ from 'lodash';
import type { NextApiHandler } from 'next';

import { sendToFireStoreProfileSchema } from '@/features/profile/schema';
import { removeUndefinedProperties } from '@/libs/helper';
import { auth, typedFirestore } from '@/server/firebase/firebaseAdmin';

const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method !== 'POST') return res.status(404).send('Not Found');
    const cookies = req.cookies['session'];
    if (!cookies) return;

    const { inputData, cacheData } = sendToFireStoreProfileSchema.parse(req.body);
    const { uid, family_id: familyId, members } = inputData;

    // cookieを検証
    const decodedToken = await auth.verifySessionCookie(cookies, true);
    if (decodedToken.uid !== uid) {
      return res.status(403).send('Forbidden');
    }

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
    return res.status(500).send('Internal Server Error');
  }
};

export default handler;
