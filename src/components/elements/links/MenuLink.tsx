import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactNode, useState } from 'react';

import { useBreakPoint } from '@/hooks/useBreakPoint';
import styles from '@/styles/components/elements/links/menuLink.module.scss';

import DropDawnLinks from './DropDawnLinks';

type Props = {
  href: string;
  children: ReactNode;
  isDropDawn?: boolean;
};

const links = [
  { text: 'お年玉一覧', href: '/' },
  { text: 'プレゼント一覧', href: '/' },
];

const MenuLink: FC<Props> = (props) => {
  const { href, children, isDropDawn } = props;
  const [isOpen, setIsOpen] = useState(false);
  const { tablet } = useBreakPoint();
  const router = useRouter();
  const isActive = router.pathname === href;

  const hoverEvent = () => {
    setIsOpen(true);
  };
  const unHoverEvent = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={isActive && !tablet ? styles.link__active : styles.link}
      onMouseEnter={hoverEvent}
      onMouseLeave={unHoverEvent}
    >
      <Link href={href}>{children}</Link>
      {isDropDawn && isOpen && (
        <div className={styles.link__dropdawn}>
          <DropDawnLinks links={links} />
        </div>
      )}
    </div>
  );
};

export default MenuLink;
