import { FC, ReactNode } from 'react';

import { Footer } from '@/components/elements/footer';
import { AuthenticatedHeader,Header } from '@/components/elements/headers';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <AuthenticatedHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
