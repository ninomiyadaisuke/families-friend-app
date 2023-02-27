import type { NextApiHandler } from 'next';

import { auth } from '@/firebase/firebaseAdmin';
import { assignSession, login, singUp } from '@/libs/auth';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') return res.status(404).send('Not Found');
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5日

  const { email, password, authentication } = req.body;

  // SignUp
  if (authentication === 'signup') {
    const response = await singUp(email, password);
    if (!response.ok) {
      throw new Error('認証エラー');
    }
    const { idToken } = await response.json();
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
    await assignSession(res, sessionCookie, expiresIn);
    return res.send(JSON.stringify({ status: 'success' }));
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
