import Link from 'next/link';
import { FC } from 'react';

import { logout } from '@/libs/auth';
import styles from '@/styles/components/elements/links/DropDawnLinks.module.scss';

type Props = {
  links: { text: string; href: string }[];
  auth?: 'ログアウト';
};

const DropDawnLinks: FC<Props> = (props) => {
  const { links, auth } = props;
  return (
    <ul className={styles.links}>
      {links.map((link) => (
        <li key={link.text}>
          <Link href={link.href}>{link.text}</Link>
        </li>
      ))}
      {auth && (
        <li>
          <button onClick={logout}>{auth}</button>
        </li>
      )}
    </ul>
  );
};

export default DropDawnLinks;
