import { SetStateAction } from 'jotai';
import { Dispatch, FC } from 'react';

import styles from '@/styles/components/elements/images/thumbnailImage.module.scss';

import ProfileImages from './ProfileImages';

type Props = {
  setValue: (value: string | File) => void;
  previewUrl: string;
  setImage: Dispatch<SetStateAction<boolean>>;
};

const ThumbnailImage: FC<Props> = (props) => {
  const { setValue, previewUrl, setImage } = props;
  return (
    <div className={styles.thumbnailContainer}>
      <ProfileImages.ThumbnailImage image={previewUrl} />
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
