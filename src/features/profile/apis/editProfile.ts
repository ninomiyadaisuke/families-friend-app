import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';

import { MutationConfig } from '@/libs/reactQuery';

import { EditProfile } from '../schema';

export type EncodedFile = {
  id?: string;
  encodedString: string;
  filename: string;
};

const compressAndEncodeFileToBase64 = (file?: File, quality = 0.1) => {
  if (!file) return;
  return new Promise<EncodedFile>((resolve, reject) => {
    const image = new Image();
    image.src = URL.createObjectURL(file);
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      canvas.getContext('2d')?.drawImage(image, 0, 0);
      canvas.toBlob(
        (blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64data = reader.result as string;
            resolve({
              encodedString: base64data.split(',')[1],
              filename: file.name,
            });
          };
          reader.onerror = reject;
          if (blob) {
            reader.readAsDataURL(blob);
          }
        },
        'image/jpeg',
        quality
      );
    };
    image.onerror = reject;
  });
};

export const updateProfile = async (values: EditProfile, cache: EditProfile | undefined) => {
  const userFile = await compressAndEncodeFileToBase64(values.file as File);
  const membersFile = (
    await Promise.all(
      values.members.map(async (member) => {
        const file = await compressAndEncodeFileToBase64(member.file as File);
        if (!file) return;
        return { id: member.image?.id, encodedString: file.encodedString, filename: file.filename };
      })
    )
  ).filter((item) => item !== undefined);

  const data = {
    inputData: values,
    cacheData: cache,
    files: {
      userFile,
      membersFile,
    },
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
