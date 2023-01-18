import Image from 'next/image';
import { FC } from 'react';

import styles from '@/styles/components/elements/images/fixedImage.module.scss';

type Props = {
  src: string;
  alt: string;
};

const FixedImage: FC<Props> = (props) => {
  const { src, alt } = props;
  return (
    <div className={styles.container}>
      <Image src={src} alt={alt} fill sizes="100vw" className={styles.image} />
    </div>
  );
};

export default FixedImage;
