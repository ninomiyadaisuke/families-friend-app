import { FC } from 'react';

import { FixedImage } from '@/components/elements/images';
import styles from '@/styles/components/elements/images/icons.module.scss';

export const TrashCanIcon: FC = () => {
  return <FixedImage src="/icon/material-delete.svg" alt="delete-icon" className={styles.icons__trash} />;
};
