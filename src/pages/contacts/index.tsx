import type { GetServerSideProps, NextPageWithLayout } from 'next';

import { baseLayout } from '@/pages/index';
import { checkUser } from '@/server/libs/serverUtils';

const Contacts: NextPageWithLayout = () => {
  return <div></div>;
};

Contacts.getLayout = baseLayout;

export default Contacts;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await checkUser(ctx, false); //認証必須ページはfalseを設定
};
