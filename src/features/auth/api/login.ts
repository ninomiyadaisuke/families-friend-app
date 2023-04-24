import Router from 'next/router';
import { z } from 'zod';

import { emailSchema, passwordSchema } from '@/libs/validation';

export const loginSchema = z.object({
  password: passwordSchema(),
  email: emailSchema(),
});

export type FormValues = z.infer<typeof loginSchema>;

export const login = async (values: FormValues) => {
  await fetch('/api/auth/sessionLogin', {
    method: 'POST',
    body: JSON.stringify({ ...values }),
    headers: { 'Content-Type': 'application/json' },
  });
  Router.push('/profile');
};
