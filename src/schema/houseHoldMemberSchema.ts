import { z } from 'zod';

export const houseHoldMemberSchema = z.object({
  family_id: z.string().min(1),
  first_name: z.string().max(20, '名前は20文字以下で入力してください'),
  last_name: z.string().max(20, '苗字は20文字以下で入力してください'),
  first_name_kana: z
    .string()
    .max(20, '苗字は20文字以下で入力してください')
    .regex(/^[ァ-ヶーｦ-ﾟ]+$/u, 'カタカナで入力してください')
    .optional(),
  last_name_kana: z
    .string()
    .max(20, '苗字は20文字以下で入力してください')
    .regex(/^[ァ-ヶーｦ-ﾟ]+$/u, 'カタカナで入力してください')
    .optional(),
  email: z
    .string()
    .min(1, 'メールアドレスを入力してください')
    .email({ message: 'メールアドレスの形式で入力してください' })
    .optional(),
  phone_number: z.string().optional(),
  birthday: z
    .string()
    .regex(/^(19\d{2}|20\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[01])$/, '入力する際は全て記入してください')
    .optional(),
  relationship: z.union([
    z.literal('世帯主'),
    z.literal('配偶者'),
    z.literal('子供'),
    z.literal('親'),
    z.literal('同居人'),
    z.literal(''),
  ]),
  image: z
    .object({
      id: z.string().min(1),
      path: z.string().min(1),
    })
    .optional(),
  hobby: z.string().optional(),
});

export type TFamily = z.infer<typeof houseHoldMemberSchema>;
