import { FC } from 'react';

import styles from '@/styles/components/elements/utils/requiredBadge.module.scss';

const RequiredBadge: FC = () => {
  return <span className={styles.badge}>必須</span>;
};

export default RequiredBadge;
