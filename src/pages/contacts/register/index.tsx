import type { GetServerSideProps, NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { Layout, TitleLayout } from '@/components/layouts';
import { CreateFamily } from '@/features/families/components';
import { AppProvider } from '@/providers/app';
import { checkUser } from '@/server/libs/serverUtils';
import { TAuthUser } from '@/types/users';

const FamilyCreate: NextPageWithLayout = () => {
  return <CreateFamily />;
};

export const getLayout = (page: ReactElement<TAuthUser>, title: string, bgColor?: 'bgBlue') => (
  <AppProvider>
    <Layout user={page.props.user} bgColor={bgColor}>
      <TitleLayout title={title}>{page}</TitleLayout>
    </Layout>
  </AppProvider>
);

FamilyCreate.getLayout = (page: ReactElement) => getLayout(page, '新世帯登録');

export default FamilyCreate;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await checkUser(ctx, false); //認証必須ページはfalseを設定
};
