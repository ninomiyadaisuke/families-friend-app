import type { NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { AboutTop } from '@/components/about';
import { baseLayout } from '@/pages/index';
import styles from '@/styles/pages/about.module.scss';

const About: NextPageWithLayout = () => {
  return (
    <article className={styles.about}>
      <AboutTop />
      <div style={{ height: '1000px' }}></div>
    </article>
  );
};

About.getLayout = baseLayout;

export default About;
