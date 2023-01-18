import Link from 'next/link';
import { FC } from 'react';

import styles from '@/styles/components/elements/links/toLoginLink.module.scss';

const ToLoginLink: FC = () => {
  return (
    <Link href={'/login'} className={styles.link}>
      <span>Login</span>
      <span>ログイン</span>
    </Link>
  );
};

export default ToLoginLink;
