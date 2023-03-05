import { useAtomValue } from 'jotai';
import Link from 'next/link';
import { FC } from 'react';

import { ProfileIcon, ResponsiveImage } from '@/components/elements/images';
import { MenuLink } from '@/components/elements/links';
import { drawerToggleContext } from '@/contexts/drawerToggle';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import styles from '@/styles/components/elements/headers/authenticatedHeader.module.scss';

import { HamburgerButton } from '../buttons';

const menuLinks = [
  { text: '家族一覧', href: '/' },
  { text: 'お年玉・プレゼント登録', href: '/about' },
  { text: '記録一覧', href: '#' },
];

const AuthenticatedHeader: FC = () => {
  const drawerToggle = useAtomValue(drawerToggleContext);
  const { tablet } = useBreakPoint();
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
          {!tablet && (
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
          )}
          <div className={styles.header__container_profile}>
            <ProfileIcon image="/icon/profile-icon-demo.jpg" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default AuthenticatedHeader;
