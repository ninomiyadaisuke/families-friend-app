import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';

import { ResponsiveImage } from '@/components/elements/images';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import styles from '@/styles/components/home/about.module.scss';

const About: FC = () => {
  const { tablet } = useBreakPoint();
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__textArea}>
          {tablet && <h2>About</h2>}
          {!tablet && <h2>About</h2>}
          <h3>Lorem Ispum</h3>
          <p>
            新ひぼを下転ンぼ机模メワケ朝商済ア武資ノマ仕商ア高8政ヌケマコ練聞ヌイツ功高ちけぴ離白だぜどル詰抜せこる寄労夜みあ栩亀めろ。情も東6市ヘソ委助せルつま種祭出トマフ全王ネニ風摘フカハ覧隊コケ売先いなべち自1感答メスニ総百打コヨヘ替変とめげだ直転ち済役羽委みので。
          </p>
          <Link href={'/about'}>Click to read more</Link>
        </div>
        <div className={styles.about__image}>
          <ResponsiveImage
            src={tablet ? '/home/about-gift-sp.svg' : '/home/about-gift-base.svg'}
            alt="gift"
            width={330}
            height={262}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
