import Image from 'next/image';
import { FC } from 'react';

import styles from '@/styles/components/elements/images/fixedImage.module.scss';

type Props = {
  src: string;
  alt: string;
  className: string; // widthとheightを必ず指定
};

const FixedImage: FC<Props> = (props) => {
  const { src, alt, className } = props;
  return (
    <div className={className}>
      <div className={styles.container}>
        <Image src={src} alt={alt} fill sizes="100vw" className={styles.image} priority />
      </div>
    </div>
  );
};

export default FixedImage;
