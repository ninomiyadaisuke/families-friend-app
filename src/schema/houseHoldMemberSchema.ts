import { z } from 'zod';

export const houseHoldMemberSchema = z.object({
  id: z.string(),
  image: z
    .object({
      id: z.string().min(1),
      path: z.string().min(1),
    })
    .optional(),
  file: z.union([z.string(), z.custom<FileList>().transform((file) => file[0])]).optional(),
  first_name: z.string().min(1, '名前は必須です').max(20, '名前は20文字以内で入力してください'),
  first_name_kana: z.string().min(1, '名前は必須です').max(20, '名前は20文字以内で入力してください'),
  last_name: z.string().min(1, '苗字は必須です').max(20, '苗字は20文字以内で入力してください'),
  last_name_kana: z.string().min(1, '苗字は必須です').max(20, '苗字ïは20文字以内で入力してください'),
  email: z.union([z.string().email({ message: 'メールアドレスの形式で入力してください' }), z.literal('')]),
  phone_number: z
    .union([
      z.string().regex(/^0\d{1,4}-\d{1,4}-\d{3,4}$/, '電話番号の形式が不正です。ハイフンありでご入力ください。'),
      z.literal(''),
    ])
    .optional(),
  birthday: z.union([
    z.literal(''),
    z.string().regex(/^(19\d{2}|20\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[01])$/, '入力する際は全て記入してください'),
  ]),
  hobby: z.string().max(20, '趣味は20文字以内で入力してください'),
  relationship: z
    .union([z.literal('世帯主'), z.literal('配偶者'), z.literal('子供'), z.literal('親'), z.literal('同居人')])
    .optional(),
});

export type TMembers = z.infer<typeof houseHoldMemberSchema>;
