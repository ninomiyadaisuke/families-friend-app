import { z } from 'zod';

import { familySchema } from '@/schema/familySchema';
import { houseHoldMemberSchema } from '@/schema/houseHoldMemberSchema';

const omitFamilySchema = familySchema.omit({ uid: true, family_id: true });

const omitHouseHoldMemberSchema = houseHoldMemberSchema.omit({ id: true });

export const inputFamilySchema = omitFamilySchema.merge(omitHouseHoldMemberSchema);

export type TFamily = z.infer<typeof inputFamilySchema>;
