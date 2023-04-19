import _ from 'lodash';
import type { NextApiHandler } from 'next';

import { sendToFireStoreProfileSchema } from '@/features/profile/schema';
import { auth, typedFirestore } from '@/server/firebase/firebaseAdmin';

function removeUndefinedProperties<T extends Record<string, unknown>>(obj: T): T {
  if (Array.isArray(obj)) {
    throw new Error('removeUndefinedProperties function does not accept arrays');
  }
  return Object.fromEntries(Object.entries(obj).filter(([_, value]) => value !== undefined)) as T;
}

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') return res.status(404).send('Not Found');
  const cookies = req.cookies['session'];
  if (!cookies) return;

  const { inputData, cacheData } = sendToFireStoreProfileSchema.parse(req.body);
  const { uid, family_id: familyId, members } = inputData;
  const userData = _.omit(inputData, ['members']);
  const cachedUserData = _.omit(cacheData, ['members']);
  const membersCache = cacheData?.members;

  const isUserUpdated = !_.isEqual(userData, cachedUserData);
  const decodedToken = await auth.verifySessionCookie(cookies, true);

  if (decodedToken.uid !== uid) {
    return res.status(403).send('Forbidden');
  }

  const cleanedUserData = removeUndefinedProperties(userData);

  if (isUserUpdated) {
    await typedFirestore.collection('users').doc(uid).setMerge(cleanedUserData);
  }

  const householdMemberCollection = typedFirestore.collection('families').doc(familyId).collection('household_member');

  for (const member of members) {
    const memberId = member?.id || householdMemberCollection.doc().id;
    const memberData = {
      ...member,
      id: memberId,
    };
    const cacheMembers = membersCache || [];

    try {
      const memberDoc = await householdMemberCollection.doc(memberId).get();
      if (memberDoc.exists()) {
        const isMemberUpdated = !cacheMembers.some((cacheMember) => _.isEqual(member, cacheMember));
        if (isMemberUpdated) {
          await householdMemberCollection.doc(memberId).setMerge(memberData);
        }
      } else {
        await householdMemberCollection.doc(memberId).create(memberData);
      }
    } catch (error) {
      throw new Error('Failed to update household member data');
    }
  }
  return res.status(200).send('Success');
};

export default handler;
