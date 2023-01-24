import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';

import { ResponsiveImage } from '@/components/elements/images';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import styles from '@/styles/components/home/about.module.scss';

const presentTag = {
  initial: { x: '-200%', y: '10%', opacity: 1, rotate: 0 },
  animate: {
    x: '-5%',
    y: '75%',
    rotate: 45,
    opacity: 1,
    transition: { duration: 1.5 },
  },
};

const presentVerticalRibbon = {
  initial: { x: '-270%', y: '160%', opacity: 1, rotate: 120 },
  animate: {
    x: '460%',
    y: '220%',
    rotate: 360,
    opacity: 1,
    scaleY: 1.9,
    scaleX: 1.2,
    transition: { duration: 1.5 },
  },
};

const presentBottomOfTheLidLeft = {
  initial: { x: '1150%', y: '-40%', rotate: 140 },
  animate: {
    x: '210%',
    y: '114%',
    rotate: -270,
    transition: { duration: 1.5 },
  },
};

const presentBottomOfTheLidRight = {
  initial: { x: '-150%', y: '350%', rotate: 140 },
  animate: {
    x: '570%',
    y: '114%',
    rotate: -270,
    transition: { duration: 1.5 },
  },
};

const presentBeforeRibbon = {
  initial: { x: '1150%', y: '250%', rotate: 225 },
  animate: {
    x: '1000%',
    y: '210%',
    scale: 0.8,
    rotate: 200,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const presentAfterRibbon = {
  initial: {
    opacity: 0,
    rotate: 200,
    x: '1000%',
    y: '250%',
  },
  animate: {
    opacity: 1,
    x: '460%',
    y: '50%',
    rotate: 90,
    scale: 1.2,
    transition: {
      delay: 0.3,
      duration: 1.2,
    },
  },
};

const About: FC = () => {
  const { tablet } = useBreakPoint();

  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <motion.div
          initial="hidden"
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
              <motion.div variants={presentTag} className={styles.about__image_tag}>
                <ResponsiveImage
                  src={'/home/animation-parts/presentTag.svg'}
                  alt={'parts-1'}
                  width={65}
                  height={38.4}
                />
              </motion.div>
              <motion.div variants={presentVerticalRibbon} className={styles.about__image_verticalRibbon}>
                <ResponsiveImage
                  src={'/home/animation-parts/presentVerticalRibbon.svg'}
                  alt={'parts-1'}
                  width={25}
                  height={75}
                />
              </motion.div>
              <motion.div variants={presentBottomOfTheLidLeft} className={styles.about__image_presentBottomOfTheLid}>
                <ResponsiveImage
                  src={'/home/animation-parts/presentBottomOfTheLid.svg'}
                  alt={'parts-1'}
                  width={27}
                  height={60}
                />
              </motion.div>
              <motion.div variants={presentBottomOfTheLidRight} className={styles.about__image_presentBottomOfTheLid}>
                <ResponsiveImage
                  src={'/home/animation-parts/presentBottomOfTheLid.svg'}
                  alt={'parts-1'}
                  width={27}
                  height={60}
                />
              </motion.div>
              <motion.div variants={presentBeforeRibbon} className={styles.about__image_presentBeforeRibbon}>
                <ResponsiveImage
                  src={'/home/animation-parts/presentBeforeRibbon.svg'}
                  alt={'parts-1'}
                  width={25}
                  height={96}
                />
              </motion.div>

              <motion.div variants={presentAfterRibbon} className={styles.about__image_presentAfterRibbon}>
                <ResponsiveImage
                  src={'/home/animation-parts/presentAfterRibbon.svg'}
                  alt={'parts-1'}
                  width={30}
                  height={96}
                />
              </motion.div>
            </>
          )}
          <ResponsiveImage
            src={tablet ? '/home/about-gift-sp.svg' : '/home/about-gift-base.svg'}
            alt="gift"
            width={330}
            height={262}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
