import { FC } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import styles from '@/styles/components/forms/checkbox.module.scss';

type Props = {
  registration: UseFormRegisterReturn;
  label?: string;
};

const CheckBox: FC<Props> = (props) => {
  const { registration, label } = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.click();
      e.preventDefault();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <div>
          <input id="checkbox" type="checkbox" value={'retention'} {...registration} onKeyDown={handleKeyDown} />
          <label htmlFor="checkbox"></label>
        </div>
      </div>
      <label className="" htmlFor="checkbox">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
