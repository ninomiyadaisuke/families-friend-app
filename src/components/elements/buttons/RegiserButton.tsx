import { FC, memo } from 'react';

import styles from '@/styles/components/elements/buttons/regiserButton.module.scss';

type Props = {
  onClick: () => void;
};

const RegiserButton: FC<Props> = memo((props) => {
  const { onClick } = props;

  return (
    <button onClick={onClick} className={styles.button}>
      <span>Regiser now</span>
      <span>登録</span>
      <p />
    </button>
  );
});

export default RegiserButton;
