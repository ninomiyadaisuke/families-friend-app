import { FC } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import styles from '@/styles/components/forms/checkbox.module.scss';

type Props = {
  registration?: UseFormRegisterReturn;
};

const CheckBox: FC<Props> = (props) => {
  const { registration } = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.click();
      e.preventDefault();
    }
  };

  return (
    <div className={styles.checkbox}>
      <input id="checkbox" type="checkbox" value={'retention'} {...registration} onKeyDown={handleKeyDown} />
      <label htmlFor="checkbox"></label>
    </div>
  );
};

export default CheckBox;
