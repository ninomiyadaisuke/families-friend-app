import { DataModel, FirestoreModel, rules, timestampType } from 'fireschema';
import { Merge } from 'type-fest';
import { z } from 'zod';
export const password = z
  .string()
  .min(1, 'パスワードを入力してください')
  .min(8, 'パスワードは8文字以上で入力してください')
  .regex(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i, 'パスワードは半角英数字混合で入力してください')
  .default('');

export const confirmPassword = z.string().min(1, '確認用のパスワードを入力してください');

export const email = z
  .string()
  .min(1, 'メールアドレスを入力してください')
  .email({ message: 'メールアドレスの形式で入力してください' });

export const confirmEmail = z.string().min(1, '確認用のメールアドレスを入力してください');

export const firstName = z.string().max(20, '名前は20文字以下で入力してください');

export const firstNameKana = z.union([
  z.literal(''),
  z
    .string()
    .max(20, '苗字は20文字以下で入力してください')
    .regex(/^[\p{scx=Katakana}|ｦ-ﾟ]+$/u, 'カタカナで入力してください'),
]);

export const lastName = z.string().max(20, '苗字は20文字以下で入力してください');

export const lastNameKana = z.union([
  z.literal(''),
  z
    .string()
    .max(20, '苗字は20文字以下で入力してください')
    .regex(/^[\p{scx=Katakana}|ｦ-ﾟ]+$/u, 'カタカナで入力してください'),
]);

export const birthday = z.union([
  z.literal(''),
  z.string().regex(/^(19\d{2}|20\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[01])$/, '入力する際は全て記入してください'),
]);

export const relationship = z.union([
  z.literal(''),
  z.literal('世帯主'),
  z.literal('配偶者'),
  z.literal('子供'),
  z.literal('親'),
  z.literal('同居人'),
]);

export const userSchema = z.object({
  uid: z.string(),
  family_id: z.string(),
  email: email,
  phone_number: z.string(),
  first_name: firstName,
  first_name_kana: firstNameKana,
  last_name: lastName,
  last_name_kana: lastNameKana,
  birthday,
  relationship,
  zip_code: z.string(),
  address: z.string(),
  hobby: z.string(),
  image: z.object({
    id: z.string(),
    path: z.string(),
  }),
  created_at: timestampType(),
  updated_at: timestampType(),
});

type TUser = z.infer<typeof userSchema>;

type TUserDecoded = Merge<TUser, { created_at: Date; updated_at: Date }>;

const UserModel = new DataModel({
  schema: userSchema,
  decoder: (data: TUser): TUserDecoded => ({
    ...data,
    created_at: data.created_at.toDate(),
    updated_at: data.updated_at.toDate(),
  }),
});

export const firestoreModel = new FirestoreModel({
  'function isAdmin()': `
    return exists(${rules.basePath}/admins/$(request.auth.uid));
`,
  'function requestUserIs(uid)': `
      return request.auth.uid == uid;
`,
  collectionGroups: {},

  '/users/{uid}': {
    model: UserModel,
    allow: {
      read: rules.or('requestUserIs(uid)', 'isAdmin()'),
      write: rules.or('requestUserIs(uid)', 'isAdmin()'),
    },
  },
});

export default firestoreModel;
