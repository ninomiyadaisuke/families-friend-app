import { FC, HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { RequiredBadge } from '@/components/elements/utils';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import styles from '@/styles/components/forms/roundedInput.module.scss';

import { FixedImage } from '../elements/images';

type Props = {
  type: HTMLInputTypeAttribute;
  registration?: UseFormRegisterReturn;
  iconType: 'user' | 'email';
  src: string;
  alt: string;
  placeholder: string;
  errorMesseage?: string;
  required?: 'required';
  responsiveImageNone?: 'none';
};

const RoundedInput: FC<Props> = (props) => {
  const { type, required, src, alt, errorMesseage, placeholder, responsiveImageNone, iconType, registration } = props;
  const { tablet } = useBreakPoint();
  const checkImage = src && alt;
  const iconNone = tablet && responsiveImageNone === 'none';

  const iconSizeClassName = (() => {
    switch (iconType) {
      case 'email':
        return `${styles.input__icon_email}`;
      case 'user':
        return `${styles.input__icon_user}`;
      default:
        const check: never = iconType;
    }
  })();
  return (
    <div>
      <FixedImage src={src} alt={alt} className={`${styles.input__icon} ${iconSizeClassName}`} />
      <div>
        {errorMesseage ? (
          <FixedImage src="/icon/error-icon.svg" className={styles.input__status_error} alt="error" />
        ) : (
          <RequiredBadge />
        )}
      </div>
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

export default RoundedInput;
