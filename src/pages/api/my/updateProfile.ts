import _ from 'lodash';
import type { NextApiHandler } from 'next';

import { sendToFireStoreProfileSchema } from '@/features/profile/schema';
import { auth, typedFirestore } from '@/server/firebase/firebaseAdmin';

function removeUndefinedProperties(obj: any) {
  for (const key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }
  return obj;
}

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') return res.status(404).send('Not Found');
  const cookies = req.cookies['session'];
  if (!cookies) return;

  const { inputData, cacheData } = sendToFireStoreProfileSchema.parse(req.body);

  const userData = {
    ..._.omit(inputData, ['members']),
  };
  const cachedUserData = {
    ..._.omit(cacheData, ['members']),
  };

  const membersData = {
    ..._.pick(inputData, ['members']),
  };

  const membersCacheData = {
    ..._.pick(cacheData, ['members']),
  };

  const isUserUpdated = !_.isEqual(userData, cachedUserData);
  const isMemberUpdated = !_.isEqual(membersData, membersCacheData);

  const uid = inputData.uid;
  const familyId = inputData.family_id;
  const members = inputData.members;
  await auth.verifySessionCookie(cookies, true).then(async (decodedToken) => {
    if (decodedToken.uid !== uid) {
      return res.status(403).send('Forbidden');
    }

    const cleanedUserData = removeUndefinedProperties(userData);

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
      try {
        const memberDoc = await householdMemberCollection.doc(memberId).get();
        if (memberDoc.exists()) {
          await householdMemberCollection.doc(memberId).setMerge(memberData);
        } else {
          await householdMemberCollection.doc(memberId).create(memberData);
        }
      } catch (error) {
        throw new Error('Failed to update household member data');
      }
    }
    return res.status(200).send('Success');
  });
};

export default handler;
