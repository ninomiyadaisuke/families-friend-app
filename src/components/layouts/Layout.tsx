import { FC, ReactNode } from 'react';

import { Footer } from '@/components/elements/footer';
import { AuthenticatedHeader, Header } from '@/components/elements/headers';
import styles from '@/styles/components/layouts/layout.module.scss';

type Props = {
  children: ReactNode;
  user?: { email: string; uid: string };
  bgColor?: 'bgBlue';
};

const Layout: FC<Props> = (props) => {
  const { children, user, bgColor } = props;

  return (
    <div className={styles.container}>
      {user ? <AuthenticatedHeader /> : <Header />}
      <main className={bgColor ? styles.bgBlue : styles.bgWhite}>{children}</main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
