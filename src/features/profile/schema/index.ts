import { z } from 'zod';

import { houseHoldMemberSchema } from '@/schema/houseHoldMemberSchema';
import { userSchema } from '@/schema/userSchema';

const houseHoldMemberOptionalIdSchema = z.intersection(
  houseHoldMemberSchema.omit({ id: true }),
  z.object({ id: z.string().optional() })
);

export const cardsSchema = z.array(houseHoldMemberSchema);

const houseHoldMemberOptionalIdArraySchema = z.array(houseHoldMemberOptionalIdSchema);

const houseHoldMembersObjectSchema = z.object({
  members: houseHoldMemberOptionalIdArraySchema,
});

export const fetchProfileSchema = userSchema.merge(
  z.object({
    members: cardsSchema,
  })
);

export const editProfileSchema = userSchema.merge(
  z.object({
    members: z.array(houseHoldMemberOptionalIdSchema),
  })
);

export const sendToFireStoreProfileSchema = z.object({
  inputData: editProfileSchema,
  cacheData: editProfileSchema.optional(),
  files: z.object({
    userFile: z
      .object({
        encodedString: z.string(),
        filename: z.string(),
      })
      .optional(),
    membersFile: z.array(
      z
        .object({
          id: z.string(),
          encodedString: z.string(),
          filename: z.string(),
        })
        .optional()
    ),
  }),
  // file: z
  //   .object({
  //     encodedString: z.string(),
  //     filename: z.string(),
  //   })
  //   .optional(),
});

export type TProfileCard = z.infer<typeof cardsSchema>;
export type EditProfile = z.infer<typeof editProfileSchema>;
export type FetchProfle = z.infer<typeof fetchProfileSchema>;
export type RelationshipType = '世帯主' | '配偶者' | '子供' | '親' | '同居人' | '' | undefined;
export type CardsType = z.infer<typeof cardsSchema>;

export type THouseHoldMembersObject = z.infer<typeof houseHoldMembersObjectSchema>;
