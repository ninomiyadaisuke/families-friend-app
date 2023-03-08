import type { NextPageWithLayout } from 'next';
import { GetServerSideProps } from 'next';

import { baseLayout } from '@/pages/index';
import { checkUser } from '@/pages/libs/serverUtils';

type Props = {
  user: {
    email: string;
    uid: string;
  };
};

const Profile: NextPageWithLayout<Props> = ({ user }) => {
  return <div>{user.uid}</div>;
};

Profile.getLayout = baseLayout;

export default Profile;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await checkUser(ctx, false); //認証必須ページはfalseを設定
};
