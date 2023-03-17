import type { GetServerSideProps, NextPageWithLayout } from 'next';

import { AboutText, AboutTop } from '@/components/about';
import { baseLayout } from '@/pages/index';
import { checkUser } from '@/server/libs/serverUtils';
import styles from '@/styles/pages/about.module.scss';

const About: NextPageWithLayout = () => {
  return (
    <article className={styles.about}>
      <AboutTop />
      <AboutText />
    </article>
  );
};

About.getLayout = (page) => baseLayout(page, 'bgBlue');

export default About;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await checkUser(ctx, true); //認証必須ではないのでtrue
};
