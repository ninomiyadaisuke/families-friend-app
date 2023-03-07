import type { NextPageWithLayout } from 'next';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import { ReactElement } from 'react';

import { Layout } from '@/components/layouts';
import { firebaseAdmin } from '@/firebase/firebaseAdmin';

type Props = {
  user: {
    email: string;
    uid: string;
  };
};

const Profile: NextPageWithLayout<Props> = ({ user }) => {
  return <div>{user.uid}</div>;
};

export const baseLayout = (page: ReactElement<{ children: ReactElement<Props> }>) => {
  return <Layout user={page.props.children.props.user}>{page}</Layout>;
};

Profile.getLayout = baseLayout;

export default Profile;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const cookies = nookies.get(ctx);
  // const session = cookies.session || '';
  // const user = await firebaseAdmin
  //   .auth()
  //   .verifySessionCookie(session, true)
  //   .catch(() => null);

  // if (!user) {
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false,
  //     },
  //   };
  // }
  return { props: { user: { email: 'test@test.com', uid: 'fkdskfsdjfklsjfkls' } } };
};
