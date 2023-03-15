import { useAtom } from 'jotai';

import { previewUrlContext, showImageContext } from '@/contexts/uploadContext';

export const useImageUpload = () => {
  const [image, setImage] = useAtom(showImageContext);
  const [previewUrl, setPreviewUrl] = useAtom(previewUrlContext);

  return { image, setImage, previewUrl, setPreviewUrl };
};
