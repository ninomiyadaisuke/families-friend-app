import Link from 'next/link';
import { FC } from 'react';

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
};

const DropDawnLinks: FC<Props> = (props) => {
  const { links, auth } = props;

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <Link key={link.text} href={link.href}>
          {link.text}
        </Link>
      ))}
      {auth && <button onClick={logout}>{auth}</button>}
    </div>
  );
};

export default DropDawnLinks;
