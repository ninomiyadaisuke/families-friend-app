import { useSetAtom } from 'jotai';
import Link from 'next/link';
import { FC } from 'react';

import { drawerToggleContext } from '@/contexts/drawerToggle';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import { logout } from '@/libs/auth';
import styles from '@/styles/components/elements/links/DropDawnLinks.module.scss';

type Props = {
  links: {
    text: string;
    href:
      | string
      | {
          pathname: string;
          query: {
            type: string;
          };
        };
  }[];
  auth?: 'ログアウト';
  type?: 'menu';
};

const DropDawnLinks: FC<Props> = (props) => {
  const { links, auth, type } = props;
  const { tablet } = useBreakPoint();
  const setDrawerToggle = useSetAtom(drawerToggleContext);

  return (
    <div className={tablet && type === 'menu' ? styles.drawerLinks : styles.links}>
      {links.map((link) => (
        <Link key={link.text} href={link.href} onClick={() => setDrawerToggle(true)}>
          {link.text}
        </Link>
      ))}
      {auth && <button onClick={logout}>{auth}</button>}
    </div>
  );
};

export default DropDawnLinks;
