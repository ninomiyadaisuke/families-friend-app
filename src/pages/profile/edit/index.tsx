import type { NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { Layout } from '@/components/layouts';

const ProfileEdit: NextPageWithLayout = () => {
  return <div></div>;
};

export const baseLayout = (page: ReactElement) => <Layout>{page}</Layout>;

ProfileEdit.getLayout = baseLayout;

export default ProfileEdit;
