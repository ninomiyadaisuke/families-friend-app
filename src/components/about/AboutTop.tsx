import { motion } from 'framer-motion';
import { FC } from 'react';

import { ResponsiveImage } from '@/components/elements/images';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import { aboutAnimationData } from '@/libs/datas/animation';
import { aboutTitle } from '@/libs/variants';
import styles from '@/styles/components/about/aboutTop.module.scss';

const AboutTop: FC = () => {
  const { tablet } = useBreakPoint();
  return (
    <motion.section initial="initial" whileInView={'animate'} viewport={{ once: true }} className={styles.aboutTop}>
      {tablet ? (
        <>
          <h2>ABOUT</h2>
          <div className={styles.aboutTop__image}>
            <ResponsiveImage src={'/about/about-gift-base.svg'} width={328} height={262} alt={'gift-image'} />
          </div>
        </>
      ) : (
        <>
          <motion.h2 variants={aboutTitle}>ABOUT</motion.h2>
          <div className={styles.aboutTop__images}>
            {aboutAnimationData.map((data, i) => (
              <motion.div variants={data.variants} key={i} className={data.className}>
                <ResponsiveImage src={data.src} width={data.width} height={data.height} alt={data.alt} />
              </motion.div>
            ))}
          </div>
        </>
      )}
    </motion.section>
  );
};

export default AboutTop;
