import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';

import { ResponsiveImage } from '@/components/elements/images';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import { homeAnimationData } from '@/libs/datas/animation';
import styles from '@/styles/components/home/about.module.scss';

const About: FC = () => {
  const { tablet } = useBreakPoint();

  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <motion.div
          initial="initial"
          whileInView={'animate'}
          viewport={{ once: true }}
          className={styles.about__textArea}
        >
          {tablet && <h2>About</h2>}
          {/* {!tablet && <motion.h2 variants={boyAnim}>About</motion.h2>} */}
          <h3>Lorem Ispum</h3>
          <p>
            新ひぼを下転ンぼ机模メワケ朝商済ア武資ノマ仕商ア高8政ヌケマコ練聞ヌイツ功高ちけぴ離白だぜどル詰抜せこる寄労夜みあ栩亀めろ。情も東6市ヘソ委助せルつま種祭出トマフ全王ネニ風摘フカハ覧隊コケ売先いなべち自1感答メスニ総百打コヨヘ替変とめげだ直転ち済役羽委みので。
          </p>
          <Link href={'/about'}>Click to read more</Link>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView={'animate'}
          viewport={{ once: false }}
          className={styles.about__image}
        >
          {!tablet && (
            <>
              {homeAnimationData.map((data, i) => (
                <motion.div key={i} variants={data.variants} className={data.className}>
                  <ResponsiveImage src={data.src} alt={data.alt} width={data.widht} height={data.height} />
                </motion.div>
              ))}
            </>
          )}
          <ResponsiveImage
            src={tablet ? '/home/about-gift-sp.svg' : '/home/about-gift-base.svg'}
            alt="gift"
            width={873}
            height={663}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
