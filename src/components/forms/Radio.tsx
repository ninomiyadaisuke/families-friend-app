import cx from 'classnames';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from '@/styles/components/forms/radio.module.scss';

type Props = {
  registration?: UseFormRegisterReturn;
  radioButtons: { value: string; label: string }[];
  widthStyle: string;
};

const Radio: FC<Props> = (props) => {
  const { registration, radioButtons, widthStyle } = props;
  return (
    <div className={cx(styles.radioContainer, widthStyle)}>
      {radioButtons.map((radio) => (
        <div className={styles.input}>
          <input type={'radio'} value={radio.value} id={radio.value} {...registration} />
          <label className={styles.input__label} htmlFor={radio.value}>
            {radio.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Radio;
