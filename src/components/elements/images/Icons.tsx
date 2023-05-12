import { FC } from 'react';

import { FixedImage } from '@/components/elements/images';
import styles from '@/styles/components/elements/images/icons.module.scss';

import { RequiredBadge } from '../utils';

interface IconsProps {
  TrashCanIcon: FC;
  PencilSquareIcon: FC;
  PencilIcon: FC;
  EmailIcon: FC;
  PersonIcon: FC;
  MobileIcon: FC;
  CurrentPositonIcon: FC;
  AddressIcon: FC;
  LockIcon: FC;
  NoteIcon: FC;
  ErrorIcon: FC;
  RequiredBadge: FC;
  TwitterIcon: FC;
  InstagramIcon: FC;
  FaceBookIcon: FC;
}
const Icons: IconsProps = {
  TrashCanIcon: () => <FixedImage src="/icon/material-delete.svg" alt="delete-icon" className={styles.icons__trash} />,
  PencilSquareIcon: () => (
    <FixedImage src="/icon/edit-icon.svg" alt="edit-icon" className={styles.icons__pencilSquare} />
  ),
  PencilIcon: () => <FixedImage src="/icon/pencil-icon.svg" alt="edit-icon" className={styles.icons__pencil} />,
  EmailIcon: () => <FixedImage src="/icon/email-icon.svg" alt="email-icon" className={styles.icons__email} />,
  PersonIcon: () => <FixedImage src="/icon/user-icon.svg" alt="user-icon" className={styles.icons__email} />,
  MobileIcon: () => <FixedImage src="/icon/mobile-icon.svg" alt="mobile-icon" className={styles.icons__phone} />,
  AddressIcon: () => <FixedImage src="/icon/address-icon.svg" alt="address-icon" className={styles.icons__phone} />,
  CurrentPositonIcon: () => (
    <FixedImage src="/icon/zip-code-icon.svg" alt="zip-code-icon" className={styles.icons__currentPosition} />
  ),
  LockIcon: () => <FixedImage src="/icon/password-icon.svg" alt="password-icon" className={styles.icons__password} />,
  NoteIcon: () => <FixedImage src="/icon/hobby-icon.svg" alt="hobby-icon" className={styles.icons__note} />,
  ErrorIcon: () => <FixedImage src="/icon/error-icon.svg" alt="error" className={styles.icons__error} />,
  RequiredBadge: () => <RequiredBadge />,
  TwitterIcon: () => <FixedImage src="/icon/twitter-icon.svg" alt="twitter-icon" className={styles.icons__twitter} />,
  InstagramIcon: () => (
    <FixedImage src="/icon/instagram-icon.svg" alt="instagram-icon" className={styles.icons__instagram} />
  ),
  FaceBookIcon: () => (
    <FixedImage src="/icon/facebook-icon.svg" alt="facebook-icon" className={styles.icons__facebook} />
  ),
};

export default Icons;
