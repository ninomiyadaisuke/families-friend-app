import type { NextApiHandler } from 'next';
import { z } from 'zod';

import { assignSession, login } from '@/libs/auth';
import { email, password } from '@/libs/validation';
import { auth } from '@/server/firebase/firebaseAdmin';

const loginSchema = z.object({
  email,
  password,
});

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') return res.status(404).send('Not Found');
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5日
  const { email, password } = loginSchema.parse(req.body);

  const response = await login(email, password);
  if (!response.ok) {
    throw new Error('認証エラー');
  }
  const { idToken } = await response.json();
  const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
  await assignSession(res, sessionCookie, expiresIn);
  return res.send(JSON.stringify({ status: 'success' }));
};

export default handler;
