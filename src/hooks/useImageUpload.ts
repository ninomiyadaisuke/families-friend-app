import { useAtom } from 'jotai';

import { previewUrlContext, showImageContext } from '@/contexts/uploadContext';

export const useImageUpload = () => {
  const [image, setImage] = useAtom(showImageContext);
  const [previewUrl, setPreviewUrl] = useAtom(previewUrlContext);

  const fileChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(true);
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return { image, setImage, previewUrl, setPreviewUrl, fileChangedHandler };
};
