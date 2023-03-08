import type { GetServerSideProps, NextPageWithLayout } from 'next';

import { baseLayout } from '@/pages/index';

import { checkUser } from './libs/serverUtils';

const Present: NextPageWithLayout = () => {
  return <div></div>;
};

Present.getLayout = baseLayout;

export default Present;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await checkUser(ctx, false); //認証必須ページはfalseを設定
};
