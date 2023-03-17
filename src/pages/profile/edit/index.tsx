import type { GetServerSideProps, NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { Layout, TitleLayout } from '@/components/layouts';
import { checkUser } from '@/server/libs/serverUtils';
import { TAuthUser } from '@/types/users';

const ProfileEdit: NextPageWithLayout = () => {
  return <div></div>;
};

export const getLayout = (
  page: ReactElement<{ children: ReactElement<TAuthUser> }>,
  title: string,
  bgColor?: 'bgBlue'
) => (
  <Layout user={page.props.children.props.user} bgColor={bgColor}>
    <TitleLayout title={title}>{page}</TitleLayout>
  </Layout>
);
ProfileEdit.getLayout = (page: ReactElement) => getLayout(page, 'プロフィール編集');

export default ProfileEdit;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await checkUser(ctx, false); //認証必須ページはfalseを設定
};
