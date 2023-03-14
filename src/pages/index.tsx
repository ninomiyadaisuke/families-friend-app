import type { GetServerSideProps, NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { Hero, HomeAbout, HomeService } from '@/components/home';
import { Layout } from '@/components/layouts';
import { checkUser } from '@/server/libs/serverUtils';
import { TAuthUser } from '@/types/users';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeService />
    </>
  );
};

export const baseLayout = (page: ReactElement<{ children: ReactElement<TAuthUser> }>) => (
  <Layout user={page.props.children.props.user}>{page}</Layout>
);

Home.getLayout = baseLayout;

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await checkUser(ctx, true); //認証必須ではないのでtrue
};
