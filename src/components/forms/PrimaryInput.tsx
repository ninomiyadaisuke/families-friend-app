import { FC, HTMLInputTypeAttribute } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import { RequiredBadge } from '@/components/elements/utils';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import styles from '@/styles/components/forms/primaryInput.module.scss';

import { FixedImage } from '../elements/images';

type Props = {
  type: HTMLInputTypeAttribute;
  registration?: UseFormRegisterReturn;
  iconType: 'user' | 'email' | 'password' | 'phone' | 'zipCode' | 'address' | 'hobby';
  src: string;
  alt: string;
  placeholder: string;
  errorMesseage?: string;
  required?: 'required';
  responsiveImageNone?: 'none';
};

const PrimaryInput: FC<Props> = (props) => {
  const { type, required, src, alt, errorMesseage, placeholder, responsiveImageNone, iconType, registration } = props;
  const { tablet } = useBreakPoint();
  const checkImage = src && alt;
  const iconNone = tablet && responsiveImageNone === 'none';

  const iconSizeClassName = (() => {
    switch (iconType) {
      case 'email':
        return `${styles.input__icon_email}`;
      case 'password':
        return `${styles.input__icon_password}`;
      case 'user':
        return `${styles.input__icon_user}`;
      case 'address':
        return `${styles.input__icon_address}`;
      case 'hobby':
        return `${styles.input__icon_hobby}`;
      case 'zipCode':
        return `${styles.input__icon_zipCode}`;
      case 'phone':
        return `${styles.input__icon_phone}`;
      default:
        const check: never = iconType;
    }
  })();

  return (
    <div className={styles.input}>
      {checkImage && !iconNone && (
        <FixedImage src={src} alt={alt} className={`${styles.input__icon} ${iconSizeClassName}`} />
      )}
      {required === 'required' && (
        <div className={styles.input__status}>
          {errorMesseage ? (
            <FixedImage src="/icon/error-icon.svg" className={styles.input__status_error} alt="error" />
          ) : (
            <RequiredBadge />
          )}
        </div>
      )}

      <input
        {...registration}
        autoComplete="on"
        type={type}
        placeholder={placeholder}
        className={iconNone ? styles.input__icon_none : ''}
      />
      {errorMesseage && <p>{errorMesseage}</p>}
    </div>
  );
};

export default PrimaryInput;
