import { useIsFetching } from '@tanstack/react-query';
import { FC } from 'react';

import styles from '@/styles/components/elements/utils/loader.module.scss';

import { Spinner } from './';

const Loader: FC = () => {
  const isFetching = useIsFetching();

  return (
    <>
      {isFetching === 1 && (
        <div className={styles.loader}>
          <Spinner color="red" />
        </div>
      )}
    </>
  );
};

export default Loader;
