import { motion } from 'framer-motion';
import { FC } from 'react';

import { ResponsiveImage } from '@/components/elements/images';
import styles from '@/styles/components/home/hero.module.scss';

const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <ResponsiveImage src="/home/hero-image.svg" alt="hero-image" width={1500} height={800} />
      </motion.div>
    </section>
  );
};

export default Hero;
