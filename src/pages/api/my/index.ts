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
    if (!user) return;

    const houseHoldMember = await typedFirestore
      .collection('families')
      .doc(user.family_id)
      .collection('household_member')
      .getData()
      .then((data) => [...data]);
    const returnData = {
      uid: user.uid,
      family_id: user.family_id,
      first_name: user.first_name,
      last_name: user.last_name,
      first_name_kana: user.first_name_kana,
      last_name_kana: user.last_name_kana,
      email: user.email,
      phone_number: user.phone_number,
      hobby: user.hobby,
      birthday: user.birthday,
      zip_code: user.zip_code,
      address: user.address,
      building: user.building,
      members: houseHoldMember,
    };
    return res.status(200).json(returnData);
  });
};

export default handler;
