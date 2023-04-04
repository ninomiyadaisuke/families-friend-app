import { z } from 'zod';

export const schema = z.object({
  file: z.union([z.string(), z.custom<FileList>().transform((file) => file[0])]),
  first_name: z.string(),
  first_name_kana: z.string(),
  last_name: z.string(),
  last_name_kana: z.string(),
  email: z.string().email().optional(),

  phone_number: z.string().optional(),
  birthday: z.string().optional(),
  hobby: z.string(),
  relationship: z.union([
    z.literal('世帯主'),
    z.literal('配偶者'),
    z.literal('子供'),
    z.literal('親'),
    z.literal('同居人'),
    z.literal(''),
  ]),
});

export type FormValues = z.infer<typeof schema>;
