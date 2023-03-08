import type { GetServerSideProps, NextPageWithLayout } from 'next';

import { baseLayout } from '@/pages/index';
import { checkUser } from '@/server/libs/serverUtils';

const ProfileEdit: NextPageWithLayout = () => {
  return <div></div>;
};

ProfileEdit.getLayout = baseLayout;

export default ProfileEdit;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await checkUser(ctx, false); //認証必須ページはfalseを設定
};
