import type { NextApiHandler } from 'next';

import { auth, typedFirestore } from '@/server/firebase/firebaseAdmin';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET') return res.status(404).send('Not Found');
  const cookies = req.cookies['session'];
  if (!cookies) return;
  await auth.verifySessionCookie(cookies, true).then(async (userData) => {
    const uid = userData.uid;
    const userIcon = await typedFirestore
      .collection('users')
      .doc(uid)
      .getData()
      .then((data) => data?.image?.path);

    if (!userIcon) return res.status(200).json('');

    return res.status(200).json(userIcon);
  });
};

export default handler;
