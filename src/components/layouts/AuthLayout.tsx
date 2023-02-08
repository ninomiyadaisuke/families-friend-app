import { FC, ReactNode } from 'react';

import { ResponsiveImage } from '@/components/elements/images';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import styles from '@/styles/components/layouts/authLayout.module.scss';

type Props = {
  children: ReactNode;
  type: 'login' | 'register';
};

const AuthLayout: FC<Props> = (props) => {
  const { children, type } = props;
  const { tablet } = useBreakPoint();
  const className = (() => {
    switch (type) {
      case 'register':
        return `${styles.container}`;
      case 'login':
        return `${styles.container__login}`;
      default:
        const _: never = type;
    }
  })();
  return (
    <div className={className}>
      {!tablet && <aside className={styles.aside} />}
      <section>
        <h1 className={styles.title}>
          <ResponsiveImage
            src={tablet ? '/logo/auth-logo-sp.svg' : '/logo/auth-logo-pc.svg'}
            alt="auth-logo"
            width={tablet ? 305 : 262}
            height={tablet ? 68 : 50}
          />
        </h1>
        {children}
      </section>
    </div>
  );
};

export default AuthLayout;
