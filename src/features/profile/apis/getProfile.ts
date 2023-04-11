import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { profileSchema } from '@/features/profile/schema';
import { extractUser, sortByRelationship } from '@/libs/helper';
import { ExtractFnReturnType, QueryConfig } from '@/libs/reactQuery';

export const fetchHouseHoldMember = async () => {
  const data = await axios.get('/api/my');
  const profile = profileSchema.parse(data.data);
  profile.members = sortByRelationship([extractUser(profile), ...profile.members]);
  return profile;
};

type QueryFnType = typeof fetchHouseHoldMember;

export const useGetProfile = (config?: QueryConfig<QueryFnType>) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['houseHoldMember'],
    queryFn: fetchHouseHoldMember,
  });
};
