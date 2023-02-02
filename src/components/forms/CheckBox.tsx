import { FC } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import styles from '@/styles/components/forms/checkbox.module.scss';

type Props = {
  registration: UseFormRegisterReturn;
};

const CheckBox: FC<Props> = (props) => {
  const { registration } = props;
  return (
    <div className={styles.checkbox}>
      <input id="checkbox" type="checkbox" value={'retention'} {...registration} />
      <label htmlFor="checkbox"></label>
    </div>
  );
};

export default CheckBox;
