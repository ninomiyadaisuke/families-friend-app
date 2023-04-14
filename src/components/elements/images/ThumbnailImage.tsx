import { SetStateAction } from 'jotai';
import { Dispatch, FC } from 'react';

import styles from '@/styles/components/elements/images/thumbnailImage.module.scss';

import FixedImage from './FixedImage';

type Props = {
  setValue: (value: string | File) => void;
  previewUrl: string;
  setImage: Dispatch<SetStateAction<boolean>>;
};

const ThumbnailImage: FC<Props> = (props) => {
  const { setValue, previewUrl, setImage } = props;
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
