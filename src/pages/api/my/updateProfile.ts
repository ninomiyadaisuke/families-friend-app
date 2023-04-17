import type { NextApiHandler } from 'next';

import { auth, typedFirestore } from '@/server/firebase/firebaseAdmin';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') return res.status(404).send('Not Found');
  const cookies = req.cookies['session'];
  if (!cookies) return;

  const { uid, family_id, user: userData, household_member: householdMembersData } = req.body;
  await auth.verifySessionCookie(cookies, true).then(async (decodedToken) => {
    if (decodedToken.uid !== uid) {
      return res.status(403).send('Forbidden');
    }
    await typedFirestore.collection('users').doc(uid).update(userData);

    for (const member of householdMembersData) {
      const memberRef = typedFirestore
        .collection('families')
        .doc(family_id)
        .collection('household_member')
        .doc(member.id);
      const memberDoc = await memberRef.get();
      if (memberDoc.exists()) {
        await memberRef.update(member);
      } else {
        await memberRef.setMerge(member);
      }
    }
    return res.status(200).send('Success');
  });
};

export default handler;
