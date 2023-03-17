import Router from 'next/router';
import { z } from 'zod';

export const loginSchema = z.object({
  password: z
    .string()
    .min(1, 'パスワードを入力してください')
    .min(8, 'パスワードは8文字以上で入力してください')
    .regex(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i, 'パスワードは半角英数字混合で入力してください'),
  email: z
    .string()
    .min(1, 'メールアドレスを入力してください')
    .email({ message: 'メールアドレスの形式で入力してください' }),
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
