import { FC } from 'react';

import { FixedImage } from '@/components/elements/images';
import styles from '@/styles/components/elements/images/icons.module.scss';

interface IconsProps {
  TrashCanIcon: FC;
  PencilSquareIcon: FC;
  PencilIcon: FC;
  EmailIcon: FC;
}

const Icons: IconsProps = {
  TrashCanIcon: () => <FixedImage src="/icon/material-delete.svg" alt="delete-icon" className={styles.icons__trash} />,
  PencilSquareIcon: () => (
    <FixedImage src="/icon/edit-icon.svg" alt="edit-icon" className={styles.icons__pencilSquare} />
  ),
  PencilIcon: () => <FixedImage src="/icon/pencil-icon.svg" alt="edit-icon" className={styles.icons__pencil} />,
  EmailIcon: () => <FixedImage src="/icon/email-icon.svg" alt="email-icon" className={styles.icons__email} />,
};

export default Icons;
