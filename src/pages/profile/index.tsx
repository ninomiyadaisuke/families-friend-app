import type { NextPageWithLayout } from 'next';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import { ReactElement } from 'react';

import { Layout } from '@/components/layouts';
import { firebaseAdmin } from '@/firebase/firebaseAdmin';

const Profile: NextPageWithLayout = () => {
  return <div></div>;
};

export const baseLayout = (page: ReactElement) => <Layout>{page}</Layout>;

Profile.getLayout = baseLayout;

export default Profile;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const session = cookies.session || '';
  const user = await firebaseAdmin
    .auth()
    .verifySessionCookie(session, true)
    .catch(() => null);

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return { props: { user: { email: user.email, uid: user.uid } } };
};
