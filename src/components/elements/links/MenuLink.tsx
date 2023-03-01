import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

import { useBreakPoint } from '@/hooks/useBreakPoint';
import styles from '@/styles/components/elements/links/menuLink.module.scss';

type Props = {
  href: string;
  children: ReactNode;
};

const MenuLink: FC<Props> = (props) => {
  const { href, children } = props;
  const { tablet } = useBreakPoint();
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} className={isActive && !tablet ? styles.link__active : styles.link}>
      {children}
    </Link>
  );
};

export default MenuLink;
