import type { NextApiHandler } from 'next';
import { destroyCookie, parseCookies } from 'nookies';

import { auth } from '@/server/firebase/firebaseAdmin';

const handler: NextApiHandler = async (req, res) => {
  // POSTじゃなければ、"404 Not Found"を返す
  if (req.method !== 'POST') return res.status(404).send('Not Found');
  // Cookieに保存されているセッションIDを取得する
  const sessionId = parseCookies({ req }).session || '';
  // セッションIDから認証情報を取得する
  const decodedClaims = await auth.verifySessionCookie(sessionId).catch(() => null);

  // 全てのセッションを無効にする
  if (decodedClaims) {
    await auth.revokeRefreshTokens(decodedClaims.sub);
  }

  // Cookieに保存されているセッションIDを削除
  destroyCookie({ res }, 'session', { path: '/' });
  res.send(JSON.stringify({ status: 'success' }));
};

export default handler;
