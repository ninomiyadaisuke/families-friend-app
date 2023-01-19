import { FC } from 'react';

import { ResponsiveImage } from '@/components/elements/images';
import styles from '@/styles/components/home/hero.module.scss';

const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <ResponsiveImage src="/home/hero-image.svg" alt="hero-image" width={1500} height={800} />
    </section>
  );
};

export default Hero;
