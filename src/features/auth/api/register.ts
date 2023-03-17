import { doc, setDoc } from 'firebase/firestore';
import Router from 'next/router';
import { z } from 'zod';

import { familiesRef, timeStamp, usersRef } from '@/firebase';
import {
  birthday,
  confirmEmail,
  confirmPassword,
  email,
  firstName,
  firstNameKana,
  lastName,
  lastNameKana,
  password,
  relationship,
} from '@/libs/validation';

export const registerSchema = z
  .object({
    password: password,
    confirm_password: confirmPassword,
    email: email,
    confirm_email: confirmEmail,
    first_name: firstName,
    first_name_kana: firstNameKana,
    last_name: lastName,
    last_name_kana: lastNameKana,
    birthday: birthday,
    relationship: relationship,
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
