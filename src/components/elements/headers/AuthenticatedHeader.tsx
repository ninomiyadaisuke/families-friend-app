import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { FC } from 'react';
import { z } from 'zod';

import { ProfileIcon, ResponsiveImage } from '@/components/elements/images';
import { MenuLink } from '@/components/elements/links';
import { useLayout } from '@/hooks/useLayout';
import styles from '@/styles/components/elements/headers/authenticatedHeader.module.scss';

import { HamburgerButton } from '../buttons';
import { Spinner } from '../utils';

const menuLinks = [
  { text: '家族一覧', href: '/contacts' },
  { text: 'お年玉・プレゼント登録', href: '/present' },
  { text: '記録一覧', href: '/list/[type]' },
];

const iconSchema = z.string();

const AuthenticatedHeader: FC = () => {
  const { drawerToggle, tablet } = useLayout();

  const isLinks = (() => {
    if (tablet) {
      if (!drawerToggle) return true;
      if (drawerToggle) return false;
    }
    return true;
  })();

  const fetchUserIcon = async () => {
    const response = await fetch('/api/my/icon', {
      method: 'GET',
    });
    const iconImage = await response.json();
    return iconSchema.parse(iconImage);
  };

  const { data, isLoading } = useQuery(['userIcon'], fetchUserIcon);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.header__container}>
          {tablet && (
            <div className={styles.header__container__hamburger}>
              <HamburgerButton />
            </div>
          )}
          <h1>
            <Link href={'/'}>
              <ResponsiveImage
                src={tablet ? '/logo/authenticated-logo-sp.svg' : '/logo/header-logo.svg'}
                width={262}
                height={50}
                alt="logo"
              />
            </Link>
          </h1>
          {isLinks && (
            <div className={tablet ? styles.header__container_menu : styles.header__container_menu_pc}>
              <ul>
                {menuLinks.map((link) => {
                  const isDropDawn = link.text === '記録一覧';
                  return (
                    <MenuLink key={link.text} href={link.href} isDropDawn={isDropDawn}>
                      {link.text}
                    </MenuLink>
                  );
                })}
              </ul>
            </div>
          )}
          <div className={styles.header__container_profile}>
            {isLoading ? <Spinner color="red" /> : <ProfileIcon image={data} />}
          </div>
        </nav>
      </header>
    </>
  );
};

export default AuthenticatedHeader;
