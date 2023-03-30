import type { NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { AuthLayout } from '@/components/layouts';
import { LoginForm } from '@/features/auth/components';
import { AppProvider } from '@/providers/app';

const Login: NextPageWithLayout = () => {
  return <LoginForm />;
};

export const authLayout = (page: ReactElement) => (
  <AppProvider>
    <AuthLayout type="login">{page}</AuthLayout>
  </AppProvider>
);

Login.getLayout = authLayout;

export default Login;
