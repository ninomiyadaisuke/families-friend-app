import type { NextApiHandler } from 'next';
import { z } from 'zod';

import { assignSession, singUp } from '@/libs/auth';
import { email, password } from '@/libs/validation';
import { userSchema } from '@/schema/userSchema';
import { auth, typedFirestore } from '@/server/firebase/firebaseAdmin';

const registerSchema = userSchema
  .pick({
    first_name: true,
    first_name_kana: true,
    last_name: true,
    last_name_kana: true,
    birthday: true,
    relationship: true,
  })
  .merge(
    z.object({
      email,
      password,
    })
  );

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') return res.status(404).send('Not Found');
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5日
  const { email, password, first_name, first_name_kana, last_name, last_name_kana, birthday, relationship } =
    registerSchema.parse(req.body);
  // SignUp
  const response = await singUp(email, password);
  if (!response.ok) {
    throw new Error('認証エラー');
  }
  const { idToken } = await response.json();
  const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
  await assignSession(res, sessionCookie, expiresIn);
  await auth
    .verifySessionCookie(sessionCookie, true)
    .then(async (user) => {
      const uid = user.uid;
      const family_id = typedFirestore.collection('families').doc().id;
      const household_member_id = typedFirestore.collection('families').doc().id;
      await typedFirestore.collection('users').doc(user.uid).create({
        uid,
        family_id,
        email,
        first_name,
        first_name_kana,
        last_name,
        last_name_kana,
        birthday,
        relationship,
      });
      await typedFirestore
        .collection('families')
        .doc(family_id)
        .create({
          uid,
          family_id,
        })
        .then(async () => {
          return await typedFirestore
            .collection('families')
            .doc(family_id)
            .collection('household_member')
            .doc(household_member_id)
            .create({
              family_id,
              first_name,
              last_name,
              first_name_kana,
              last_name_kana,
              email,
              birthday,
              relationship: '',
            });
        });
    })
    .then(() => {
      return res.send(JSON.stringify({ status: 'success' }));
    })
    .catch((e) => {
      return res.send(JSON.stringify({ status: e.message }));
    });
};

export default handler;
