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

  const initialLinks = ((tablet: boolean) => {
    if (!tablet) return;
    return true;
  })(tablet);

  const openLinks = tablet ? initialLinks : isOpen;

  return (
    <div
      className={isActive ? styles.link__active : styles.link}
      onMouseEnter={() => hoverEvent(tablet)}
      onMouseLeave={() => unHoverEvent(tablet)}
    >
      {href !== '/list/[type]' ? (
        <Link className={styles.link__nextLink} onClick={() => setDrawerToggle(true)} href={href}>
          {children}
        </Link>
      ) : (
        <a className={styles.link__atag}>{children}</a>
      )}

      {isDropDawn && openLinks && (
        <div className={styles.link__dropdawn}>
          <DropDawnLinks links={links} type={'menu'} />
        </div>
      )}
    </div>
  );
};

export default MenuLink;
