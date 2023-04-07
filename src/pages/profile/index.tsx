import type { NextPageWithLayout } from 'next';
import { GetServerSideProps } from 'next';

import { MyProfile } from '@/features/profile/components';
import { baseLayout } from '@/pages/index';
import { checkUser } from '@/server/libs/serverUtils';

const Profile: NextPageWithLayout = () => {
  return <MyProfile />;
};

Profile.getLayout = (page) => baseLayout(page, 'bgBlue');

export default Profile;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await checkUser(ctx, false); //認証必須ページはfalseを設定
};
