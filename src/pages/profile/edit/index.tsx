import type { GetServerSideProps, NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { Layout, TitleLayout } from '@/components/layouts';
import { EditProfile } from '@/features/profile/components';
import { AppProvider } from '@/providers/app';
import { checkUser } from '@/server/libs/serverUtils';
import { TAuthUser } from '@/types/users';

const ProfileEdit: NextPageWithLayout = () => {
  return <EditProfile />;
};

export const getLayout = (page: ReactElement<TAuthUser>, title: string, bgColor?: 'bgBlue') => (
  <AppProvider>
    <Layout user={page.props.user} bgColor={bgColor}>
      <TitleLayout title={title}>{page}</TitleLayout>
    </Layout>
  </AppProvider>
);
ProfileEdit.getLayout = (page: ReactElement) => getLayout(page, 'プロフィール編集');

export default ProfileEdit;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await checkUser(ctx, false); //認証必須ページはfalseを設定
};
