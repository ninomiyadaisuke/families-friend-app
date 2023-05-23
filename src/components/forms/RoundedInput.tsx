import { FC, HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { useBreakPoint } from '@/hooks/useBreakPoint';
import styles from '@/styles/components/forms/roundedInput.module.scss';

import { FixedImage, Icons } from '../elements/images';

type Props = {
  type: HTMLInputTypeAttribute;
  registration?: UseFormRegisterReturn;
  iconType?: 'user';
  placeholder: string;
  errorMesseage?: string;
  id?: string;
  width?: string;
};

const RoundedInput: FC<Props> = (props) => {
  const { type, errorMesseage, placeholder, iconType, registration, id, width } = props;

  return (
    <div className={`${styles.input} ${width}`}>
      {iconType && <Icons.PersonIcon position={styles.input__icon} />}

      {errorMesseage && (
        <>
          <FixedImage src="/icon/error-icon.svg" className={styles.input_error} alt="error" />
          <p>{errorMesseage}</p>
        </>
      )}
      <input
        id={id}
        {...registration}
        autoComplete="on"
        type={type}
        placeholder={placeholder}
        className={!iconType ? styles.input__icon_none : ''}
      />
    </div>
  );
};

export default RoundedInput;
