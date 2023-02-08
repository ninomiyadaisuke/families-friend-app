import Image from 'next/image';
import { FC } from 'react';

import styles from '@/styles/components/elements/images/responsiveImage.module.scss';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const ResponsiveImage: FC<Props> = (props) => {
  const { src, alt, width, height } = props;
  return <Image src={src} alt={alt} width={width} height={height} sizes="100vw" className={styles.image} priority />;
};

export default ResponsiveImage;
