import type { GetServerSideProps, NextPageWithLayout } from 'next';

import { baseLayout } from '@/pages';
import { checkUser } from '@/server/libs/serverUtils';

const List: NextPageWithLayout = () => {
  return <>お年玉orプレゼントリストページ</>;
};

List.getLayout = baseLayout;

export default List;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await checkUser(ctx, false); //認証必須ページはfalseを設定
};
