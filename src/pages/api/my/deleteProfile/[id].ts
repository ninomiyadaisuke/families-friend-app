import type { NextApiHandler } from 'next';

import { typedFirestore } from '@/server/firebase/firebaseAdmin';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'DELETE') return res.status(404).send('Not Found');
  const id = req.query.id;
  const familyId = req.query.familyId;
  try {
    await typedFirestore
      .collection('families')
      .doc(familyId as string)
      .collection('household_member')
      .doc(id as string)
      .delete();
    return res.status(200).send('Success');
  } catch (error) {
    return res.status(400).send('失敗');
  }
};

export default handler;
