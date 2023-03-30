import type { NextPageWithLayout } from 'next';

import { RegisterForm } from '@/features/auth/components';
import { authLayout } from '@/pages/login';

const Register: NextPageWithLayout = () => {
  return <RegisterForm />;
};

Register.getLayout = authLayout;

export default Register;
