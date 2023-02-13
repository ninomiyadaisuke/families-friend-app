import type { NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { AuthLayout } from '@/components/layouts';
import { RegisterForm } from '@/features/auth/components';

const Register: NextPageWithLayout = () => {
  return <RegisterForm />;
};

export const authLayout = (page: ReactElement) => <AuthLayout type="register">{page}</AuthLayout>;

Register.getLayout = authLayout;

export default Register;
