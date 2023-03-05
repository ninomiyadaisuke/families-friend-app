import { FC, useState } from 'react';

import styles from '@/styles/components/elements/buttons/hamburger.module.scss';

const HamburgerButton: FC = () => {
  const [drawerToggle, setDrawerToggle] = useState(true);

  return (
    <div className={styles.hamburger}>
      <input type="checkbox" onChange={() => setDrawerToggle((prev) => !prev)} checked={!drawerToggle} />
      <div></div>
    </div>
  );
};

export default HamburgerButton;
