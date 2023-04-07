import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { z } from 'zod';

import { sortByRelationship } from '@/libs/helper';
import { ExtractFnReturnType, QueryConfig } from '@/libs/reactQuery';
import { houseHoldMemberSchema } from '@/schema/houseHoldMemberSchema';

export const userSchema = z.object({
  image: z
    .object({
      id: z.string().min(1),
      path: z.string().min(1),
    })
    .optional(),
  name: z.string().max(20).optional(),
  zipCode: z.string().optional(),
  address: z.string().optional(),
});

export const cardsSchema = z.array(
  houseHoldMemberSchema.merge(
    z.object({
      id: z.string().min(1),
    })
  )
);

export const profileSchema = z.object({
  user: userSchema,
  cards: cardsSchema,
});

export type CardsType = z.infer<typeof cardsSchema>;
export type RelationshipType = '世帯主' | '配偶者' | '子供' | '親' | '同居人';

export const fetchHouseHoldMember = async () => {
  const user = await axios.get('/api/my');
  const data = profileSchema.parse(user.data);
  data.cards = sortByRelationship(data.cards);
  return data;
};

type QueryFnType = typeof fetchHouseHoldMember;

export const useGetProfile = (config?: QueryConfig<QueryFnType>) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['houseHoldMember'],
    queryFn: fetchHouseHoldMember,
  });
};
