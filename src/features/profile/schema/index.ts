import { z } from 'zod';

import { houseHoldMemberSchema } from '@/schema/houseHoldMemberSchema';
import { userSchema } from '@/schema/userSchema';

const omitIdHouseHoldMemberSchema = houseHoldMemberSchema.omit({
  id: true,
});

export const cardsSchema = z.array(houseHoldMemberSchema);

export const fetchProfileSchema = userSchema.merge(
  z.object({
    members: cardsSchema,
  })
);

export const editProfileSchema = userSchema.merge(
  z.object({
    members: z.array(omitIdHouseHoldMemberSchema),
  })
);

export type TProfileCard = z.infer<typeof cardsSchema>;
export type EditProfile = z.infer<typeof editProfileSchema>;
export type FetchProfle = z.infer<typeof fetchProfileSchema>;
export type RelationshipType = '世帯主' | '配偶者' | '子供' | '親' | '同居人' | '' | undefined;
export type CardsType = z.infer<typeof cardsSchema>;
