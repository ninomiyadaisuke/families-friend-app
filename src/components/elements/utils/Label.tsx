import { FC, ReactNode } from 'react';

import styles from '@/styles/components/elements/utils/label.module.scss';

type Props = {
  children: ReactNode;
};

const Label: FC<Props> = (props) => {
  const { children } = props;
  return <label className={styles.label}>{children}</label>;
};

export default Label;
