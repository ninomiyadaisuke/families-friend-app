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

const phoneCircle = {
  initial: { x: '1300%', y: '850%' },
  animate: {
    x: '1065%',
    y: '770%',
    transition: { duration: 1.5 },
  },
};

const phoneShadow = {
  initial: { x: '300%', y: '285%', rotate: 140, scaleX: 0.3 },
  animate: {
    x: '510%',
    y: '225%',
    rotate: 0,
    scaleX: 1,
    transition: { duration: 1.5 },
  },
};

const userListAfter = {
  initial: { x: '430%', y: '-50%', rotate: -45, scaleX: 0.5, scaleY: 0.7 },
  animate: {
    x: '373%',
    y: '9%',
    rotate: 0,
    scaleX: 1,
    scaleY: 1,
    transition: { duration: 1.5 },
  },
};

const noteShadow = {
  initial: { x: '29%', y: '465%' },
};

const userListShadow = {
  initial: { x: '390%', y: '25%' },
};

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
              <motion.div variants={noteShadow} className={styles.about__image_noteShadow}>
                <ResponsiveImage src={'/home/about-gift-note-shadow.png'} alt="gift" width={140} height={118} />
              </motion.div>
              <motion.div variants={userListShadow} className={styles.about__image_userListShadow}>
                <ResponsiveImage src={'/home/about-gift-list-shadow.png'} alt="gift" width={160} height={190} />
              </motion.div>

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
              <motion.div variants={phoneCircle} className={styles.about__image_phoneCircle}>
                <ResponsiveImage src={'/home/animation-parts/phoneCircle.svg'} alt={'parts-1'} width={65} height={65} />
              </motion.div>
              <motion.div variants={phoneShadow} className={styles.about__image_phoneShadow}>
                <ResponsiveImage
                  src={'/home/animation-parts/phoneShadow.svg'}
                  alt={'parts-1'}
                  width={126}
                  height={197}
                />
              </motion.div>
              <motion.div variants={userListAfter} className={styles.about__image_userList}>
                <ResponsiveImage src={'/home/animation-parts/userList.svg'} alt={'parts-1'} width={171} height={216} />
              </motion.div>
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
