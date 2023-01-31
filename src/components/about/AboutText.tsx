import { motion } from 'framer-motion';
import { FC } from 'react';

import { japanImage } from '@/libs/variants';
import styles from '@/styles/components/about/aboutText.module.scss';

import { ResponsiveImage } from '../elements/images';

const AboutText: FC = () => {
  return (
    <motion.section initial="initial" whileInView={'animate'} viewport={{ once: true }} className={styles.about}>
      <div className={styles.about__textImage}>
        <div className={styles.about__textImage_text}>
          <h3>Who We Are</h3>
          <p>
            話自リセアラ償本ちーけフ眼写驚規れや部地きレしち苦到自カヒエ世方エワヒ婚家ネチコム曲車ず覚来喚宴るぞぽと。働へで数属ナエコ済抗ンれ森条ソテツキ沼円27素2来シホエ地42講やゅでび身実投いは県在際リ大要ハオ米軸話自リセアラ償本ちーけフ眼写驚規れや部地きレしち苦到自カヒエ世方エワヒ婚家ネチコム曲車ず覚来喚宴るぞぽと。働へで数属ナエコ済抗ンれ森条ソテツキ沼円27素2来シホエ地42講やゅでび身実投いは県在際リ大要ハオ米軸
            話自リセアラ償本ちーけフ眼写驚規れや部地きレしち苦到自カヒエ世方エワヒ婚家ネチコム曲車ず覚来喚宴るぞぽと。働へで数属ナエコ済抗ンれ森条ソテツキ沼円27素2来シホエ地42講やゅでび身実投いは県在際リ大要ハオ米軸
          </p>
        </div>
        <motion.div variants={japanImage} className={styles.about__textImage_image}>
          <ResponsiveImage src="/about/japan.svg" alt="japan" width={683} height={425} />
        </motion.div>
      </div>
      <div className={styles.about__texts}>
        <h3>Overview</h3>
        <p>
          話自リセアラ償本ちーけフ眼写驚規れや部地きレしち苦到自カヒエ世方エワヒ婚家ネチコム曲車ず覚来喚宴るぞぽと。働へで数属ナエコ済抗ンれ森条ソテツキ沼円27素2来シホエ地42講やゅでび身実投いは県在際リ大要ハオ米軸話自リセアラ償本ちーけフ眼写驚規れや部地きレしち苦到自カヒエ世方エワヒ婚家ネチコム曲車ず覚来喚宴るぞぽと。働へで数属ナエコ済抗ンれ森条ソテツキ沼円27素2来シホエ地42講やゅでび身実投いは県在際リ大要ハオ米軸
          話自リセアラ償本ちーけフ眼写驚規れや部地きレしち苦到自カヒエ世方エワヒ婚家ネチコム曲車ず覚来喚宴るぞぽと。働へで数属ナエコ済抗ンれ森条ソテツキ沼円27素2来シホエ地42講やゅでび身実投いは県在際リ大要ハオ米軸
          話自リセアラ償本ちーけフ眼写驚規れや部地きレしち苦到自カヒエ世方エワヒ婚家ネチコム曲車ず覚来喚宴るぞぽと。働へで数属ナエコ済抗ンれ森条ソテツキ沼円27素2来シホエ地42講やゅでび身実投いは県在際リ大要ハオ米軸話自リセアラ償本ちーけフ眼写驚規れや部地きレしち苦到自カヒエ世方エワヒ婚家ネチコム曲車ず覚来喚宴るぞぽと。働へで数属ナエコ済抗ンれ森条ソテツキ沼円27素2来シホエ地42講やゅでび身実投いは県在際リ大要ハオ米軸
          話自リセアラ償本ちーけフ眼写驚規れや部地きレしち苦到自カヒエ世方エワヒ婚家ネチコム曲車ず覚来喚宴るぞぽと。働へで数属ナエコ済抗ンれ森条ソテツキ沼円27素2来シホエ地42講やゅでび身実投いは県在際リ大要ハオ米軸
        </p>
      </div>
    </motion.section>
  );
};

export default AboutText;
