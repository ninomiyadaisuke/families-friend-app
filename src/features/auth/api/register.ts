import Router from 'next/router';
import { z } from 'zod';

import { userSchema } from '@/firebase/schema/userSchema';
import { confirmEmail, confirmPassword, password } from '@/libs/validation';

const userRegistrationSchema = userSchema.pick({
  email: true,
  first_name: true,
  first_name_kana: true,
  last_name: true,
  last_name_kana: true,
  birthday: true,
  relationship: true,
});

const registrationValidationSchema = z.object({
  password,
  confirm_password: confirmPassword,
  confirm_email: confirmEmail,
});

export const registerSchema = userRegistrationSchema
  .merge(registrationValidationSchema)
  .superRefine(({ password, confirm_password, email, confirm_email }, ctx) => {
    if (password !== confirm_password) {
      ctx.addIssue({
        path: ['confirm_password'],
        code: 'custom',
        message: 'パスワードが一致しません',
      });
    }
    if (email !== confirm_email) {
      ctx.addIssue({
        path: ['confirm_email'],
        code: 'custom',
        message: 'メールアドレスが一致しません',
      });
    }
  });

export type FormValues = z.infer<typeof registerSchema>;

export const login = async (values: FormValues) => {
  await fetch('/api/auth/session', {
    method: 'POST',
    body: JSON.stringify({ values, authentication: 'signup' }),
    headers: { 'Content-Type': 'application/json' },
  });
  Router.push('/profile');
};
