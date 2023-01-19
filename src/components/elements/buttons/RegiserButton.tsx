import { FC } from 'react';

import styles from '@/styles/components/elements/buttons/regiserButton.module.scss';

const RegiserButton: FC = () => {
  return (
    <button className={styles.button}>
      <span>Regiser now</span>
      <span>登録</span>
      <p />
    </button>
  );
};

export default RegiserButton;
