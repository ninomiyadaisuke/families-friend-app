import { FC, ReactNode } from 'react';

import { Footer } from '@/components/elements/footer';
import { Header } from '@/components/elements/headers';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
