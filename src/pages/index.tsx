import type { NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { About, Hero } from '@/components/home';
import { Layout } from '@/components/layouts';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};

export const HomePageLayout = (page: ReactElement) => <Layout>{page}</Layout>;

Home.getLayout = HomePageLayout;

export default Home;
