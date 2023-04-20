import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';

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

export const useUpdateProfile = (cache: EditProfile | undefined, { config }: UseUpdateProfile = {}) => {
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
    mutationFn: (values) => updateProfile(values, cache),
  });
};
