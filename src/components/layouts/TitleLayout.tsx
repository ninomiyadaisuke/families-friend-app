import { FC, ReactNode } from 'react';

import styles from '@/styles/components/layouts/titleLayout.module.scss';

type Props = {
  title: string;
  children: ReactNode;
};

const TitleLayout: FC<Props> = (props) => {
  const { title, children } = props;
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </>
  );
};

export default TitleLayout;
