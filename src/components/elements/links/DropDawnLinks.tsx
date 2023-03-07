import Link from 'next/link';
import { FC } from 'react';

import { useLayout } from '@/hooks/useLayout';
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
  const { tablet, setDrawerToggle, router } = useLayout();

  return (
    <div className={tablet && type === 'menu' ? styles.drawerLinks : styles.links}>
      {links.map((link) => (
        <Link key={link.text} href={link.href} onClick={() => setDrawerToggle(true)}>
          {link.text}
        </Link>
      ))}
      {auth && <button onClick={() => logout().then(() => router.push('/login'))}>{auth}</button>}
    </div>
  );
};

export default DropDawnLinks;
