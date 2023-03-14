import cx from 'classnames';
import { FC, ReactNode } from 'react';

import styles from '@/styles/components/elements/texts/errorText.module.scss';

type Props = {
  children: ReactNode;
  positon?: string;
};

const ErrorText: FC<Props> = (props) => {
  const { children, positon } = props;
  return <p className={cx(styles.errorText, positon)}>{children}</p>;
};

export default ErrorText;
