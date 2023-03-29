import admin from 'firebase-admin';
import type { NextApiHandler } from 'next';

import { auth } from '@/server/firebase/firebaseAdmin';

const handler: NextApiHandler = async (req, res) => {
  const db = admin.firestore();
  if (req.method !== 'GET') return res.status(404).send('Not Found');
  const cookies = req.cookies['session'];
  if (!cookies) return;
  await auth.verifySessionCookie(cookies, true).then(async (user) => {
    const uid = user.uid;
    const familyId = await db
      .collection('users')
      .doc(uid)
      .get()
      .then((data) => {
        const user = data.data();
        if (!user) return;
        const id = user.family_id;
        return id;
      });

    await db
      .collection('families')
      .doc(familyId)
      .collection('household_member')
      .get()
      .then((snapshots) => {
        const arry = [] as any[];
        snapshots.forEach((doc) => {
          const familyMember = doc.data();
          arry.push(familyMember);
        });

        return res.status(200).json(arry);
      });
  });
};

export default handler;
