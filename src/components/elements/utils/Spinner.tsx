import { FC } from 'react';

import styles from '@/styles/components/elements/utils/spinner.module.scss';

type Props = {
  color: 'red' | 'blue';
};

const Spinner: FC<Props> = (props) => {
  const { color } = props;

  const className = (() => {
    switch (color) {
      case 'blue':
        return `${styles.spinner}`;
      case 'red':
        return `${styles.spinner__red}`;
      default:
        const check: never = color;
    }
  })();

  return <div className={className}></div>;
};

export default Spinner;
