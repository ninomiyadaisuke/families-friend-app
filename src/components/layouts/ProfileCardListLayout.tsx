import { FC, ReactNode } from 'react';

import styles from '@/styles/components/layouts/profileCardListLayout.module.scss';

type Props = {
  children: ReactNode;
};

const ProfileCardListLayout: FC<Props> = (props) => {
  const { children } = props;
  return <div className={styles.list}>{children}</div>;
};

export default ProfileCardListLayout;
