import type { NextApiHandler } from 'next';

import { auth, typedFirestore } from '@/server/firebase/firebaseAdmin';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET') return res.status(404).send('Not Found');
  const cookies = req.cookies['session'];
  if (!cookies) return;
  await auth.verifySessionCookie(cookies, true).then(async () => {
    const houseHoldMember = await typedFirestore
      .collectionGroup('household_member')
      .getData()
      .then((data) => [...data]);
    return res.status(200).json(houseHoldMember);
  });
};

export default handler;
