import type { NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { Layout } from '@/components/layouts';

const List: NextPageWithLayout = () => {
  return <>お年玉orプレゼントリストページ</>;
};

export const baseLayout = (page: ReactElement) => <Layout>{page}</Layout>;

List.getLayout = baseLayout;

export default List;
