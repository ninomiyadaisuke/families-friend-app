import { FC, useEffect } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { ProfileImages, ThumbnailImage } from '@/components/elements/images';
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
  const { previewUrl, image, setImage, fileChangedHandler } = useImageUpload();

  useEffect(() => {
    if (imageUrl) {
      setImage(false);
    }
  }, [setValue, imageUrl]);

  return (
    <div className={styles.uploaderContainer}>
      <div className={styles.uploaderContainer__label}>
        <ImaegLabel title="顔写真" block={true} />
      </div>
      <div className={styles.uploaderContainer__imageAndButton}>
        <div className={styles.uploaderContainer__imageAndButton_postion}>
          <ProfileImages.RectangleImage image={imageUrl} />
        </div>
        <UploadButton registration={registration} fileChangedHandler={fileChangedHandler} />
      </div>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      {previewUrl && image && (
        <div className={styles.uploaderContainer__thumbnail}>
          <ThumbnailImage setValue={setValue} setImage={setImage} previewUrl={previewUrl} />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
