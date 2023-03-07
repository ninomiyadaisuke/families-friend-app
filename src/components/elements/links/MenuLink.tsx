import Link from 'next/link';
import { FC, ReactNode } from 'react';

import { useLayout } from '@/hooks/useLayout';
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
  const { setDrawerToggle, router, tablet, isOpen, hoverEvent, unHoverEvent } = useLayout();

  const isActive = router.pathname === href;

  const initialLinks = ((tablet: boolean) => {
    if (!tablet) return;
    return true;
  })(tablet);

  const isOpenLinks = tablet ? initialLinks : isOpen;

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

      {isDropDawn && isOpenLinks && (
        <div className={styles.link__dropdawn}>
          <DropDawnLinks links={links} type={'menu'} />
        </div>
      )}
    </div>
  );
};

export default MenuLink;
