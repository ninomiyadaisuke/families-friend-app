import { z } from 'zod';

export const familySchema = z.object({
  uid: z.string(),
  family_id: z.string(),
  zip_code: z.string().optional(),
  address: z.string().optional(),
});

export type TFamily = z.infer<typeof familySchema>;
