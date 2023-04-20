import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { MutationConfig, queryClient } from '@/libs/reactQuery';

export const deleteProfile = async (args: [id: string, familyId: string]) => {
  await axios.delete(`/api/my/deleteProfile/${args[0]}`, {
    params: {
      familyId: args[1],
    },
  });
};

type UseDeleteProfileOptions = {
  config?: MutationConfig<typeof deleteProfile>;
};

export const useDeleteProfile = ({ config }: UseDeleteProfileOptions = {}) => {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(['myProfile']);
    },
    ...config,
    mutationFn: (...args) => deleteProfile(...args),
  });
};
