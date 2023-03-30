import type { GetServerSideProps, NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { Hero, HomeAbout, HomeService } from '@/components/home';
import { Layout } from '@/components/layouts';
import { AppProvider } from '@/providers/app';
import { checkUser } from '@/server/libs/serverUtils';

export type TAuthUser = {
  user: {
    email: string;
    uid: string;
  };
};

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeService />
    </>
  );
};

export const baseLayout = (page: ReactElement<TAuthUser>, bgColor?: 'bgBlue') => {
  return (
    <AppProvider>
      <Layout user={page.props.user} bgColor={bgColor}>
        {page}
      </Layout>
    </AppProvider>
  );
};

Home.getLayout = (page) => baseLayout(page);

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await checkUser(ctx, true); //認証必須ではないのでtrue
};
