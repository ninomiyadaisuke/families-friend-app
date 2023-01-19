import Link from 'next/link';
import { FC } from 'react';

import { RegiserButton } from '@/components/elements/buttons';
import { FixedImage } from '@/components/elements/images';
import { ToLoginLink } from '@/components/elements/links';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import styles from '@/styles/components/elements/headers/header.module.scss';

const Header: FC = () => {
  const { tablet } = useBreakPoint();

  return (
    <header className={styles.header}>
      <nav>
        <Link href={'/'}>
          <FixedImage
            src={tablet ? '/logo/header-logo-sp.svg' : '/logo/header-logo.svg'}
            alt="header-logo"
            className={styles.header__logo}
          />
        </Link>
        <ul>
          <li>
            <ToLoginLink />
          </li>
          <li>
            <Link href={'/register'}>
              <RegiserButton />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
