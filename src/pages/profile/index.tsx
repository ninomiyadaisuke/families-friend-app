import type { NextPageWithLayout } from 'next';
import { GetServerSideProps } from 'next';

import { MyProfile } from '@/features/profile/components';
import { baseLayout } from '@/pages/index';
import { TUser } from '@/schema/userSchema';
import { checkUser } from '@/server/libs/serverUtils';

type Props = {
  user: TUser;
};

const Profile: NextPageWithLayout<Props> = ({ user }) => {
  return <MyProfile user={user} />;
};

Profile.getLayout = (page) => baseLayout(page, 'bgBlue');

export default Profile;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await checkUser(ctx, false); //認証必須ページはfalseを設定
};
