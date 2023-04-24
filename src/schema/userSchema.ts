import { z } from 'zod';

import {
  birthdaySchema,
  emailSchema,
  fileSchema,
  hobbySchema,
  nameSchema,
  phoneNumberSchema,
  relationshipSchema,
} from '@/libs/validation';

export const userSchema = z.object({
  uid: z.string(),
  family_id: z.string(),
  file: fileSchema(),
  first_name: nameSchema('名前', true),
  first_name_kana: nameSchema('苗字', true, 'isKatakana'),
  last_name: nameSchema('苗字', true),
  last_name_kana: nameSchema('苗字', true, 'isKatakana'),
  email: emailSchema(),
  phone_number: phoneNumberSchema().optional(),
  birthday: birthdaySchema().optional(),
  hobby: hobbySchema().optional(),
  zip_code: z.string().optional(),
  address: z.string().max(50, '50文字以内で入力してください').optional(),
  building: z.string().max(50, '50文字以内で入力してください').optional(),
  relationship: relationshipSchema(),
  image: z
    .object({
      id: z.string(),
      path: z.string(),
    })
    .optional(),
});

export type TUser = z.infer<typeof userSchema>;
