import { FC, ReactNode } from 'react';

import { Footer } from '@/components/elements/footer';
import { AuthenticatedHeader, Header } from '@/components/elements/headers';

type Props = {
  children: ReactNode;
  user?: any;
};

const Layout: FC<Props> = (props) => {
  const { children, user } = props;

  return (
    <>
      {user ? <AuthenticatedHeader /> : <Header />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
