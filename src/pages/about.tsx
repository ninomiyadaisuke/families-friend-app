import type { NextPageWithLayout } from 'next';

import { AboutText, AboutTop } from '@/components/about';
import { baseLayout } from '@/pages/index';
import styles from '@/styles/pages/about.module.scss';

const About: NextPageWithLayout = () => {
  return (
    <article className={styles.about}>
      <AboutTop />
      <AboutText />
    </article>
  );
};

About.getLayout = baseLayout;

export default About;
