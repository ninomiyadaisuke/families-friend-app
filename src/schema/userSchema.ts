import { z } from 'zod';

import { birthday, email, firstName, firstNameKana, lastName, lastNameKana, relationship } from '../libs/validation';

export const userSchema = z.object({
  uid: z.string(),
  family_id: z.string(),
  email: email,
  phone_number: z.string().optional(),
  first_name: firstName,
  first_name_kana: firstNameKana,
  last_name: lastName,
  last_name_kana: lastNameKana,
  birthday,
  relationship,
  zip_code: z.string().optional(),
  address: z.string().optional(),
  hobby: z.string().optional(),
  image: z
    .object({
      id: z.string(),
      path: z.string(),
    })
    .optional(),
});

export type TUser = z.infer<typeof userSchema>;
