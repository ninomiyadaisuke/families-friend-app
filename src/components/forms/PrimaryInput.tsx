import { FC } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import { RequiredBadge } from '@/components/elements/utils';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import styles from '@/styles/components/forms/primaryInput.module.scss';

import { FixedImage } from '../elements/images';

type Props = {
  type: React.HTMLInputTypeAttribute;
  registration: UseFormRegisterReturn;
  src?: string;
  className?: string;
  alt?: string;
  errorMesseage?: string;
  placeholder: string;
  required?: 'required';
  responsiveImageNone?: 'none';
};

const PrimaryInput: FC<Props> = (props) => {
  const { type, required, src, className, alt, errorMesseage, placeholder, responsiveImageNone } = props;
  const { tablet } = useBreakPoint();
  const checkImage = src && alt && className;
  const iconNone = tablet && responsiveImageNone === 'none';

  return (
    <div className={styles.input}>
      {checkImage && !iconNone && <FixedImage src={src} alt={alt} className={`${className} ${styles.input__icon}`} />}
      <div className={styles.input__status}>
        {required && errorMesseage ? (
          <FixedImage src="/icon/error-icon.svg" className={styles.input__status_error} alt="error" />
        ) : (
          <RequiredBadge />
        )}
      </div>
      <input type={type} placeholder={placeholder} className={iconNone ? styles.input__icon_none : ''} />
      {errorMesseage && <p>{errorMesseage}</p>}
    </div>
  );
};

export default PrimaryInput;
