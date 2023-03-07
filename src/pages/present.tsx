import type { NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { Layout } from '@/components/layouts';

const Present: NextPageWithLayout = () => {
  return <div></div>;
};

export const baseLayout = (page: ReactElement) => <Layout>{page}</Layout>;

Present.getLayout = baseLayout;

export default Present;
