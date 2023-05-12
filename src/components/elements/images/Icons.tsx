import cx from 'classnames';
import { FC } from 'react';

import { FixedImage } from '@/components/elements/images';
import styles from '@/styles/components/elements/images/icons.module.scss';

import { RequiredBadge } from '../utils';

type Position = {
  position?: string;
};

type IconsProps = {
  TrashCanIcon: FC<Position>;
  PencilSquareIcon: FC<Position>;
  PencilIcon: FC<Position>;
  EmailIcon: FC<Position>;
  PersonIcon: FC<Position>;
  MobileIcon: FC<Position>;
  CurrentPositonIcon: FC<Position>;
  AddressIcon: FC<Position>;
  LockIcon: FC<Position>;
  NoteIcon: FC<Position>;
  ErrorIcon: FC<Position>;
  RequiredBadge: FC;
  TwitterIcon: FC<Position>;
  InstagramIcon: FC<Position>;
  FaceBookIcon: FC<Position>;
};
const Icons: IconsProps = {
  TrashCanIcon: ({ position }) => (
    <FixedImage src="/icon/material-delete.svg" alt="delete-icon" className={cx(position, styles.icons__trash)} />
  ),
  PencilSquareIcon: ({ position }) => (
    <FixedImage src="/icon/edit-icon.svg" alt="edit-icon" className={cx(position, styles.icons__pencilSquare)} />
  ),
  PencilIcon: ({ position }) => (
    <FixedImage src="/icon/pencil-icon.svg" alt="edit-icon" className={cx(position, styles.icons__pencil)} />
  ),
  EmailIcon: ({ position }) => (
    <FixedImage src="/icon/email-icon.svg" alt="email-icon" className={cx(position, styles.icons__email)} />
  ),
  PersonIcon: ({ position }) => (
    <FixedImage src="/icon/user-icon.svg" alt="user-icon" className={cx(position, styles.icons__user)} />
  ),
  MobileIcon: ({ position }) => (
    <FixedImage src="/icon/mobile-icon.svg" alt="mobile-icon" className={cx(position, styles.icons__phone)} />
  ),
  AddressIcon: ({ position }) => (
    <FixedImage src="/icon/address-icon.svg" alt="address-icon" className={cx(position, styles.icons__phone)} />
  ),
  CurrentPositonIcon: ({ position }) => (
    <FixedImage
      src="/icon/zip-code-icon.svg"
      alt="zip-code-icon"
      className={cx(position, styles.icons__currentPosition)}
    />
  ),
  LockIcon: ({ position }) => (
    <FixedImage src="/icon/password-icon.svg" alt="password-icon" className={cx(position, styles.icons__password)} />
  ),
  NoteIcon: ({ position }) => (
    <FixedImage src="/icon/hobby-icon.svg" alt="hobby-icon" className={cx(position, styles.icons__note)} />
  ),
  ErrorIcon: ({ position }) => (
    <FixedImage src="/icon/error-icon.svg" alt="error" className={cx(position, styles.icons__error)} />
  ),
  RequiredBadge: () => <RequiredBadge />,
  TwitterIcon: ({ position }) => (
    <FixedImage src="/icon/twitter-icon.svg" alt="twitter-icon" className={cx(position, styles.icons__twitter)} />
  ),
  InstagramIcon: ({ position }) => (
    <FixedImage src="/icon/instagram-icon.svg" alt="instagram-icon" className={cx(position, styles.icons__instagram)} />
  ),
  FaceBookIcon: ({ position }) => (
    <FixedImage src="/icon/facebook-icon.svg" alt="facebook-icon" className={cx(position, styles.icons__facebook)} />
  ),
};

export default Icons;
