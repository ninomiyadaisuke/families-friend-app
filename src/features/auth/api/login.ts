import Router from 'next/router';
import { z } from 'zod';

import { email, password } from '@/libs/validation';

export const loginSchema = z.object({
  password: password,
  email: email,
});

export type FormValues = z.infer<typeof loginSchema>;

export const login = async (values: FormValues) => {
  await fetch('/api/auth/session', {
    method: 'POST',
    body: JSON.stringify({ ...values, authentication: 'login' }),
    headers: { 'Content-Type': 'application/json' },
  });
  Router.push('/profile');
};