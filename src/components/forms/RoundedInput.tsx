import { FC, HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { useBreakPoint } from '@/hooks/useBreakPoint';
import styles from '@/styles/components/forms/roundedInput.module.scss';

import { FixedImage } from '../elements/images';

type Props = {
  type: HTMLInputTypeAttribute;
  registration?: UseFormRegisterReturn;
  iconType?: 'user';
  src?: string;
  alt?: string;
  placeholder: string;
  errorMesseage?: string;
  responsiveImageNone?: 'none';
  id?: string;
  width?: string;
};

const RoundedInput: FC<Props> = (props) => {
  const { type, src, alt, errorMesseage, placeholder, responsiveImageNone, iconType, registration, id, width } = props;
  const { tablet } = useBreakPoint();
  const checkImage = src && alt;
  const iconNone = (tablet && responsiveImageNone === 'none') || !iconType;

  const iconSizeClassName = (() => {
    switch (iconType) {
      case 'user':
        return `${styles.input__icon_user}`;
    }
  })();
  return (
    <div className={`${styles.input} ${width}`}>
      {checkImage && !iconNone && (
        <FixedImage src={src} alt={alt} className={`${styles.input__icon} ${iconSizeClassName}`} />
      )}

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
        className={iconNone ? styles.input__icon_none : ''}
      />
    </div>
  );
};

export default RoundedInput;
