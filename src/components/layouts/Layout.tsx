import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import cx from 'classnames';
import { FC, ReactNode } from 'react';

import { Footer } from '@/components/elements/footer';
import { AuthenticatedHeader, Header } from '@/components/elements/headers';
import styles from '@/styles/components/layouts/layout.module.scss';

import { Loader, Spinner } from '../elements/utils';

type Props = {
  children: ReactNode;
  user?: { email: string; uid: string };
  bgColor?: 'bgBlue';
};

const Layout: FC<Props> = (props) => {
  const { children, user, bgColor } = props;

  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  return (
    <div className={cx(styles.container, bgColor ? styles.bgBlue : styles.bgWhite)}>
      {isMutating === 1 ||
        (isFetching === 1 && (
          <div className={styles.loader}>
            <Spinner color="red" />
          </div>
        ))}

      {user ? <AuthenticatedHeader /> : <Header />}
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
