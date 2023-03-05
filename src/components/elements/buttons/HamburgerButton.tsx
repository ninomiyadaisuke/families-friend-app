import { useAtom } from 'jotai';
import { FC } from 'react';

import { drawerToggleContext } from '@/contexts/drawerToggle';
import styles from '@/styles/components/elements/buttons/hamburger.module.scss';

const HamburgerButton: FC = () => {
  const [drawerToggle, setDrawerToggle] = useAtom(drawerToggleContext);

  return (
    <div className={styles.hamburger}>
      <input type="checkbox" onChange={() => setDrawerToggle((prev) => !prev)} checked={!drawerToggle} />
      <div></div>
    </div>
  );
};

export default HamburgerButton;
