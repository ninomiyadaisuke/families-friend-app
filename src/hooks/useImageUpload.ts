import { useState } from 'react';

export const useImageUpload = () => {
  const [image, setImage] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');

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
