import type { NextPageWithLayout } from 'next';
import { ReactElement } from 'react';

import { DropDawnLinks } from '@/components/elements/links';
import { Hero, HomeAbout, HomeService } from '@/components/home';
import { Layout } from '@/components/layouts';

const links = [
  { text: 'マイページ', href: '/' },
  { text: 'プロフィール編集', href: '/' },
];

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div style={{ margin: '300px' }}>
        <DropDawnLinks links={links} auth={'ログアウト'} />
      </div>
      {/* <Hero />
      <HomeAbout />
      <HomeService /> */}
    </>
  );
};

export const baseLayout = (page: ReactElement) => <Layout>{page}</Layout>;

Home.getLayout = baseLayout;

export default Home;
