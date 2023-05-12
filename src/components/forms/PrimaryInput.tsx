import { FC, HTMLInputTypeAttribute } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import { useBreakPoint } from '@/hooks/useBreakPoint';
import styles from '@/styles/components/forms/primaryInput.module.scss';

import { Icons } from '../elements/images';

type Props = {
  type: HTMLInputTypeAttribute;
  registration?: UseFormRegisterReturn;
  iconType: 'user' | 'email' | 'password' | 'phone' | 'zipCode' | 'address' | 'hobby';
  placeholder: string;
  errorMesseage?: string;
  required?: 'required';
  responsiveImageNone?: 'none';
};

type IconProps = {
  position: string;
};

const PrimaryInput: FC<Props> = (props) => {
  const { type, required, errorMesseage, placeholder, responsiveImageNone, iconType, registration } = props;
  const { tablet } = useBreakPoint();

  const iconNone = tablet && responsiveImageNone === 'none';

  const IconComponent = (() => {
    switch (iconType) {
      case 'email':
        return Icons.EmailIcon;
      case 'password':
        return Icons.LockIcon;
      case 'user':
        return Icons.PersonIcon;
      case 'address':
        return Icons.AddressIcon;
      case 'hobby':
        return Icons.NoteIcon;
      case 'zipCode':
        return Icons.CurrentPositonIcon;
      case 'phone':
        return Icons.MobileIcon;
      default:
        const check: never = iconType;
    }
  })();

  const RenderedIcon = IconComponent as FC<IconProps>;

  return (
    <div className={styles.input}>
      {!iconNone && <RenderedIcon position={styles.input__icon} />}
      {required === 'required' && (
        <div className={styles.input__status}>{errorMesseage ? <Icons.ErrorIcon /> : <Icons.RequiredBadge />}</div>
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
