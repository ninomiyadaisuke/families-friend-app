import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';

import { ResponsiveImage } from '@/components/elements/images';
import styles from '@/styles/components/home/about.module.scss';

const About: FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__textArea}>
        <h2>About</h2>
        <h3>Lorem Ispum</h3>
        <p>
          新ひぼを下転ンぼ机模メワケ朝商済ア武資ノマ仕商ア高8政ヌケマコ練聞ヌイツ功高ちけぴ離白だぜどル詰抜せこる寄労夜みあ栩亀めろ。情も東6市ヘソ委助せルつま種祭出トマフ全王ネニ風摘フカハ
        </p>
        <Link href={'/about'}>Click to read more</Link>
      </div>
      <div className={styles.about__image}>
        <ResponsiveImage src={'/home/about-gift-sp.svg'} alt="gift" width={330} height={262} />
      </div>
    </section>
  );
};

export default About;
