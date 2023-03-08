import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';

import { auth } from '@/server/firebase/firebaseAdmin';

export const checkUser = async (ctx: GetServerSidePropsContext, isProtected: boolean) => {
  const cookies = nookies.get(ctx);
  const session = cookies.session || '';
  const user = await auth.verifySessionCookie(session, true).catch(() => null);
  const isRedirect = !user && !isProtected;
  if (isRedirect) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: user
        ? {
            email: user.email,
            uid: user.uid,
          }
        : null,
    },
  };
};
