import type { NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { RequiredBadge } from '@/components/elements/utils';
import { Hero, HomeAbout, HomeService } from '@/components/home';
import { Layout } from '@/components/layouts';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeService />
      <RequiredBadge />
    </>
  );
};

export const baseLayout = (page: ReactElement) => <Layout>{page}</Layout>;

Home.getLayout = baseLayout;

export default Home;
