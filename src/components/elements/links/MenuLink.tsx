import { useSetAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactNode, useState } from 'react';

import { drawerToggleContext } from '@/contexts/drawerToggle';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import styles from '@/styles/components/elements/links/menuLink.module.scss';

import DropDawnLinks from './DropDawnLinks';

type Props = {
  href: string;
  children: ReactNode;
  isDropDawn?: boolean;
};

const links = [
  { text: 'お年玉一覧', href: { pathname: '/list/[type]', query: { type: 'otosidama' } } },
  { text: 'プレゼント一覧', href: { pathname: '/list/[type]', query: { type: 'present' } } },
];

const MenuLink: FC<Props> = (props) => {
  const { href, children, isDropDawn } = props;
  const setDrawerToggle = useSetAtom(drawerToggleContext);
  const [isOpen, setIsOpen] = useState(false);
  const { tablet } = useBreakPoint();
  const router = useRouter();

  const isActive = router.pathname === href;

  const hoverEvent = (tablet: boolean) => {
    if (tablet) return;
    setIsOpen(true);
  };
  const unHoverEvent = (tablet: boolean) => {
    if (tablet) return;
    setIsOpen(false);
  };

  return (
    <div
      className={isActive && !tablet ? styles.link__active : styles.link}
      onMouseEnter={() => hoverEvent(tablet)}
      onMouseLeave={() => unHoverEvent(tablet)}
    >
      {href !== '/list/[type]' ? (
        <Link onClick={() => setDrawerToggle(true)} href={href}>
          {children}
        </Link>
      ) : (
        <a>{children}</a>
      )}

      {isDropDawn && isOpen && (
        <div className={styles.link__dropdawn}>
          <DropDawnLinks links={links} />
        </div>
      )}
    </div>
  );
};

export default MenuLink;
