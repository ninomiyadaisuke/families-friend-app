import { z } from 'zod';

export const userSchema = z.object({
  uid: z.string(),
  family_id: z.string(),
  file: z
    .custom<FileList>()
    .transform((file) => file[0])
    .optional(),
  first_name: z.string().max(20, '名前は20文字以内で入力してください').optional(),
  first_name_kana: z.string().max(20, '名前は20文字以内でお願いします').optional(),
  last_name: z.string().max(20, '苗字は20文字以内でお願いします').optional(),
  last_name_kana: z
    .string()
    .max(20, '苗字は20文字以下で入力してください')
    .regex(/^[ァ-ヶーｦ-ﾟ]+$/u, 'カタカナで入力してください')
    .optional(),
  email: z.string().email({ message: 'emailの形式で入力してください' }),
  phone_number: z
    .union([
      z.literal(''),
      z.string().regex(/^0\d{1,4}-\d{1,4}-\d{3,4}$/, '電話番号の形式が不正です。ハイフンありでご入力ください。'),
    ])
    .optional(),
  birthday: z
    .string()
    .regex(/^(19\d{2}|20\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[01])$/, '入力する際は全て記入してください')
    .optional(),

  hobby: z.string().max(20, '趣味は20文字以内で入力してください').optional(),
  zip_code: z.string().optional(),
  address: z.string().max(50, '50文字以内で入力してください').optional(),
  building: z.string().max(50, '50文字以内で入力してください').optional(),
  relationship: z
    .union([z.literal('世帯主'), z.literal('配偶者'), z.literal('子供'), z.literal('親'), z.literal('同居人')])
    .optional(),
  image: z
    .object({
      id: z.string(),
      path: z.string(),
    })
    .optional(),
});

export type TUser = z.infer<typeof userSchema>;
