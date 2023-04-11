import { z } from 'zod';

import { houseHoldMemberSchema } from '@/schema/houseHoldMemberSchema';
import { userSchema } from '@/schema/userSchema';

export const userCardSchema = userSchema
  .omit({
    uid: true,
    family_id: true,
    zip_code: true,
    address: true,
    building: true,
  })
  .merge(
    z.object({
      id: z.string(),
    })
  );

export const cardsSchema = z.array(userCardSchema, houseHoldMemberSchema);

export const profileSchema = userSchema.merge(
  z.object({
    members: cardsSchema,
  })
);
