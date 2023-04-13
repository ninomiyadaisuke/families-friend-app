import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { profileSchema } from '@/features/profile/schema';
import { sortByRelationship } from '@/libs/helper';
import { ExtractFnReturnType, QueryConfig } from '@/libs/reactQuery';

export const getProfile = async () => {
  const data = await axios.get('/api/my');
  const profile = profileSchema.parse(data.data);
  profile.members = sortByRelationship(profile.members);
  return profile;
};

type QueryFnType = typeof getProfile;

export const useGetProfile = (config?: QueryConfig<QueryFnType>) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['myProfile'],
    queryFn: getProfile,
  });
};
