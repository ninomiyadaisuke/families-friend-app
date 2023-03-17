import { doc, setDoc } from 'firebase/firestore';
import Router from 'next/router';
import { z } from 'zod';

import { familiesRef, timeStamp, usersRef } from '@/firebase';

export const registerSchema = z
  .object({
    password: z
      .string()
      .min(1, 'パスワードを入力してください')
      .min(8, 'パスワードは8文字以上で入力してください')
      .regex(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i, 'パスワードは半角英数字混合で入力してください')
      .default(''),
    confirm_password: z.string().min(1, '確認用のパスワードを入力してください'),
    email: z
      .string()
      .min(1, 'メールアドレスを入力してください')
      .email({ message: 'メールアドレスの形式で入力してください' }),
    confirm_email: z.string().min(1, '確認用のメールアドレスを入力してください'),
    first_name: z.string().max(20, '名前は20文字以下で入力してください'),
    first_name_kana: z.union([
      z.literal(''),
      z
        .string()
        .max(20, '苗字は20文字以下で入力してください')
        .regex(/^[\p{scx=Katakana}|ｦ-ﾟ]+$/u, 'カタカナで入力してください'),
    ]),
    last_name: z.string().max(20, '苗字は20文字以下で入力してください'),
    last_name_kana: z.union([
      z.literal(''),
      z
        .string()
        .max(20, '苗字は20文字以下で入力してください')
        .regex(/^[\p{scx=Katakana}|ｦ-ﾟ]+$/u, 'カタカナで入力してください'),
    ]),
    birthday: z.union([
      z.literal(''),
      z
        .string()
        .regex(/^(19\d{2}|20\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[01])$/, '入力する際は全て記入してください'),
    ]),
    relationship: z.union([
      z.literal(''),
      z.literal('世帯主'),
      z.literal('配偶者'),
      z.literal('子供'),
      z.literal('親'),
      z.literal('同居人'),
    ]),
  })
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
  const { email, password, first_name, first_name_kana, last_name, last_name_kana, birthday, relationship } = values;
  await fetch('/api/auth/session', {
    method: 'POST',
    body: JSON.stringify({ email, password, authentication: 'signup' }),
    headers: { 'Content-Type': 'application/json' },
  }).then(async (res) => {
    const user = await res.json();
    const uid = user.uid;
    const familyId = doc(familiesRef).id;
    const userData = {
      uid,
      first_name,
      first_name_kana,
      last_name,
      last_name_kana,
      birthday,
      relationship,
      created_at: timeStamp,
      updated_at: timeStamp,
    };
    const familyData = {
      uid,
      family_id: familyId,
      created_at: timeStamp,
      updated_at: timeStamp,
    };
    await setDoc(doc(usersRef, uid), userData);
    await setDoc(doc(familiesRef, familyId), familyData);
  });
  Router.push('/profile');
};
