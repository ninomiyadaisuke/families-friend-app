import type { NextApiHandler } from 'next';

import { auth, typedFirestore } from '@/server/firebase/firebaseAdmin';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET') return res.status(404).send('Not Found');
  const cookies = req.cookies['session'];
  if (!cookies) return;
  await auth.verifySessionCookie(cookies, true).then(async (userData) => {
    const uid = userData.uid;
    const user = await typedFirestore
      .collection('users')
      .doc(uid)
      .getData()
      .then((data) => data);
    const houseHoldMember = await typedFirestore
      .collectionGroup('household_member')
      .getData()
      .then((data) => [...data]);
    if (!user) return;

    const returnData = {
      user: {
        image: user.image,
        name: user.last_name,
        zipCode: user.zip_code,
        address: user.address,
      },
      cards: houseHoldMember,
    };
    return res.status(200).json(returnData);
  });
};

export default handler;
