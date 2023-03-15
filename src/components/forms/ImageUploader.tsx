import { FC, useEffect, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FixedImage } from '@/components/elements/images';
import styles from '@/styles/components/forms/ImageUploader.module.scss';

import { ErrorText } from '../elements/texts';

type Props = {
  registration: UseFormRegisterReturn;
  errorMessage?: string;
  imageUrl?: string;
  setValue: (value: string | File) => void;
};

const ImageUploader: FC<Props> = (props) => {
  const { registration, errorMessage, imageUrl, setValue } = props;
  const { onChange, ...rest } = registration;
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [image, setImage] = useState(false);

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

  useEffect(() => {
    setImage(false);
  }, [setValue]);

  return (
    <div className={styles.uploaderContainer}>
      <label htmlFor="fileUpload" className={styles.uploaderContainer__text}>
        <span>顔写真:</span> <span>(対応形式</span> <span>JPG/JPEG/</span> <span>PNG)</span>
      </label>
      <div className={styles.uploaderContainer__imageAndButton}>
        <div className={styles.uploaderContainer_imagePostion}>
          <FixedImage
            src={imageUrl ? imageUrl : '/icon/default-image-profile.svg'}
            alt="image"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.buttonContainer}>
          <label htmlFor="fileUpload" className={styles.buttonContainer__label}>
            ファイルを選択する
          </label>
          <input
            type="file"
            accept=".jpeg,.png,.jpg"
            onChange={fileChangedHandler}
            {...rest}
            id="fileUpload"
            className={styles.buttonContainer__input}
          />
        </div>
      </div>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      {previewUrl && image && (
        <>
          <FixedImage src={previewUrl} alt="image" className={styles.thumbnailImage} />
          <a
            className={styles.deleteImage}
            onClick={() => {
              setImage(false);
              setValue('');
            }}
          >
            削除
          </a>
        </>
      )}
    </div>
  );
};

export default ImageUploader;
