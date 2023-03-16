import { FC } from 'react';

import { useImageUpload } from '@/hooks/useImageUpload';
import styles from '@/styles/components/elements/images/thumbnailImage.module.scss';

import FixedImage from './FixedImage';

type Props = {
  setValue: (value: string | File) => void;
};

const ThumbnailImage: FC<Props> = (props) => {
  const { previewUrl, setImage } = useImageUpload();
  const { setValue } = props;
  return (
    <div className={styles.thumbnailContainer}>
      <FixedImage src={previewUrl} alt="image" className={styles.thumbnailContainer__image} />
      <a
        className={styles.thumbnailContainer__link}
        onClick={() => {
          setImage(false);
          setValue('');
        }}
      >
        削除
      </a>
    </div>
  );
};

export default ThumbnailImage;
