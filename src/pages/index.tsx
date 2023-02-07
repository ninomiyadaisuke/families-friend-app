import type { NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { Hero, HomeAbout, HomeService } from '@/components/home';
import { Layout } from '@/components/layouts';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeService />
    </>
  );
};

export const baseLayout = (page: ReactElement) => <Layout>{page}</Layout>;

Home.getLayout = baseLayout;

export default Home;
