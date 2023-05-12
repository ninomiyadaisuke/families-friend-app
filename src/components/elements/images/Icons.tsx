import { FC } from 'react';

import { FixedImage } from '@/components/elements/images';
import styles from '@/styles/components/elements/images/icons.module.scss';

interface IconsProps {
  TrashCanIcon: FC;
  PencilSquareIcon: FC;
  PencilIcon: FC;
  EmailIcon: FC;
  PersonIcon: FC;
  MobileIcon: FC;
  CurrentPositonIcon: FC;
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
  CurrentPositonIcon: () => (
    <FixedImage src="/icon/zip-code-icon.svg" alt="zip-code-icon" className={styles.icons__currentPosition} />
  ),
};

export default Icons;
