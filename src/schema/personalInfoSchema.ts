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

export const personalInfoSchema = z.object({
  file: fileSchema(),
  first_name: nameSchema('名前'),
  first_name_kana: nameSchema('名前', false, 'isKatakana'),
  last_name: nameSchema('苗字'),
  last_name_kana: nameSchema('苗字', false, 'isKatakana'),
  email: emailSchema(),
  phone_number: phoneNumberSchema().optional(),
  birthday: birthdaySchema().optional(),
  hobby: hobbySchema(),
  relationship: relationshipSchema(),
});

export type FormValues = z.infer<typeof personalInfoSchema>;
