import { FC, useEffect } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FixedImage, ThumbnailImage } from '@/components/elements/images';
import { ImaegLabel } from '@/components/elements/labels';
import { useImageUpload } from '@/hooks/useImageUpload';
import styles from '@/styles/components/forms/ImageUploader.module.scss';

import { UploadButton } from '../elements/buttons';
import { ErrorText } from '../elements/texts';

type Props = {
  registration: UseFormRegisterReturn;
  errorMessage?: string;
  imageUrl?: string;
  setValue: (value: string | File) => void;
};

const ImageUploader: FC<Props> = (props) => {
  const { registration, errorMessage, imageUrl, setValue } = props;
  const { previewUrl, image, setImage } = useImageUpload();

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
        <UploadButton registration={registration} />
      </div>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      {previewUrl && image && (
        <div className={styles.uploaderContainer__thumbnail}>
          <ThumbnailImage setValue={setValue} />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
