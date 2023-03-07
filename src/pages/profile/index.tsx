import type { NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { Layout } from '@/components/layouts';

const Profile: NextPageWithLayout = () => {
  return <div></div>;
};

export const baseLayout = (page: ReactElement) => <Layout>{page}</Layout>;

Profile.getLayout = baseLayout;

export default Profile;
