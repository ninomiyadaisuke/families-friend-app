import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FieldValues } from 'react-hook-form';

import { MutationConfig, queryClient } from '@/libs/reactQuery';

import { EditProfile } from '../schema';

export const updateProfile = async (values: EditProfile, cache: EditProfile | undefined) => {
  const data = {
    inputData: values,
    cacheData: cache,
  };

  await axios.post('/api/my/updateProfile', data);
};

type UseUpdateProfile = {
  config?: MutationConfig<typeof updateProfile>;
};

export const useUpdateProfile = ({ config }: UseUpdateProfile = {}) => {
  const queryClient = useQueryClient();
  const cachedData: EditProfile | undefined = queryClient.getQueryData(['myProfile']);
  const router = useRouter();
  return useMutation({
    onMutate: async (updatingProfile) => {
      await queryClient.cancelQueries(['myProfile']);
      const previousProfile = queryClient.getQueryData<EditProfile>(['myProfile']);
      queryClient.setQueryData(['myProfile'], {
        ...previousProfile,
        ...updatingProfile,
      });
    },
    onSuccess: () => {
      queryClient.refetchQueries(['myProfile']);
      router.push('/profile');
    },
    ...config,
    mutationFn: (values) => updateProfile(values, cachedData),
  });
};
