import type { NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { AuthLayout } from '@/components/layouts';
import { LoginForm } from '@/features/auth/components';

const Login: NextPageWithLayout = () => {
  return <LoginForm />;
};

export const authLayout = (page: ReactElement) => <AuthLayout type="login">{page}</AuthLayout>;

Login.getLayout = authLayout;

export default Login;
