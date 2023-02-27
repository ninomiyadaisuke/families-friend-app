import type { NextPageWithLayout } from 'next';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Layout } from '@/components/layouts';
import { logout } from '@/libs/auth';

const Profile: NextPageWithLayout = () => {
  const router = useRouter();

  const onLogout = async () => {
    if (confirm('ログアウトしますか？')) {
      await logout();
      router.push('/login');
    }
  };
  return (
    <div style={{ margin: '300px' }}>
      <h1>my page</h1>
      <button onClick={onLogout}>ログアウト</button>
    </div>
  );
};

export const baseLayout = (page: ReactElement) => <Layout>{page}</Layout>;

Profile.getLayout = baseLayout;

export default Profile;
