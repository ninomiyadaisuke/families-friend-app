import { z } from 'zod';

export const nameSchema = (field: string, isOptional = false, isKatakana?: 'isKatakana') => {
  let schema = z.string().min(1, `${field}は必須です`).max(20, `${field}は20文字以内で入力してください`);
  if (isKatakana === 'isKatakana') {
    schema = schema.regex(/^[ァ-ヶーｦ-ﾟ]+$/u, 'カタカナで入力してください');
  }
  return isOptional ? schema.optional() : schema;
};

export const emailSchema = () =>
  z.union([z.string().email({ message: 'メールアドレスの形式で入力してください' }), z.literal('')]);

export const phoneNumberSchema = () =>
  z.union([
    z.string().regex(/^0\d{1,4}-\d{1,4}-\d{3,4}$/, '電話番号の形式が不正です。ハイフンありでご入力ください。'),
    z.literal(''),
  ]);

export const birthdaySchema = () =>
  z.union([
    z.literal(''),
    z.string().regex(/^(19\d{2}|20\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[01])$/, '入力する際は全て記入してください'),
  ]);

export const hobbySchema = () => z.string().max(20, '趣味は20文字以内で入力してください');
export const relationshipSchema = () =>
  z
    .union([
      z.literal('世帯主'),
      z.literal('配偶者'),
      z.literal('子供'),
      z.literal('親'),
      z.literal('同居人'),
      z.literal('同居人'),
    ])
    .optional();

export const fileSchema = () => z.union([z.string(), z.custom<FileList>().transform((file) => file[0])]).optional();
