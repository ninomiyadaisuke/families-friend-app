import { z } from 'zod';

import {
  birthdaySchema,
  emailSchema,
  hobbySchema,
  nameSchema,
  phoneNumberSchema,
  relationshipSchema,
} from '@/libs/validation';

export const houseHoldMemberSchema = z.object({
  id: z.string(),
  image: z
    .object({
      id: z.string().min(1),
      path: z.string().min(1),
    })
    .optional(),
  file: z.union([z.string(), z.custom<FileList>().transform((file) => file[0])]).optional(),
  first_name: nameSchema('名前'),
  first_name_kana: nameSchema('名前', false, 'isKatakana'),
  last_name: nameSchema('苗字'),
  last_name_kana: nameSchema('苗字', false, 'isKatakana'),
  email: emailSchema(),
  phone_number: phoneNumberSchema().optional(),
  birthday: birthdaySchema(),
  hobby: hobbySchema(),
  relationship: relationshipSchema(),
});

export type TMembers = z.infer<typeof houseHoldMemberSchema>;
