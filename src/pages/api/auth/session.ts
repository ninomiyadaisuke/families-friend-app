import type { NextApiHandler } from 'next';

import { assignSession, login, singUp } from '@/libs/auth';
import { auth, typedFirestore } from '@/server/firebase/firebaseAdmin';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') return res.status(404).send('Not Found');
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5日

  const { values, authentication } = req.body;
  const { email, password, first_name, first_name_kana, last_name, last_name_kana, birthday, relationship } = values;
  // SignUp
  if (authentication === 'signup') {
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
        await typedFirestore.collection('families').doc(family_id).create({
          uid,
          family_id,
        });
      })
      .then(() => {
        return res.send(JSON.stringify({ status: 'success' }));
      })
      .catch((e) => {
        return res.send(JSON.stringify({ status: e.message }));
      });
  }

  // Login
  if (authentication === 'login') {
    const response = await login(email, password);
    if (!response.ok) {
      throw new Error('認証エラー');
    }
    const { idToken } = await response.json();
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
    await assignSession(res, sessionCookie, expiresIn);
    return res.send(JSON.stringify({ status: 'success' }));
  }
};

export default handler;
