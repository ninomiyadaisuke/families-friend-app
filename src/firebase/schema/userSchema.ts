import { timestampType } from 'fireschema';
import { Merge } from 'type-fest';
import { z } from 'zod';

import { birthday, email, firstName, firstNameKana, lastName, lastNameKana, relationship } from '../../libs/validation';

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

export type TUser = z.infer<typeof userSchema>;

export type TUserDecoded = Merge<TUser, { created_at: Date; updated_at: Date }>;
