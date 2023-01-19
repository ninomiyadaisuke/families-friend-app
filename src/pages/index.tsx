import type { NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { Layout } from '@/components/layouts';

const Home: NextPageWithLayout = () => {
  return <div>Hello world</div>;
};

export const HomePageLayout = (page: ReactElement) => <Layout>{page}</Layout>;

Home.getLayout = HomePageLayout;

export default Home;
