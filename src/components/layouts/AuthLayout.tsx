import { FC, ReactNode } from 'react';

import { ResponsiveImage } from '@/components/elements/images';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import styles from '@/styles/components/layouts/authLayout.module.scss';

type Props = {
  children: ReactNode;
};

const AuthLayout: FC<Props> = (props) => {
  const { children } = props;
  const { tablet } = useBreakPoint();
  return (
    <div className={styles.container}>
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
