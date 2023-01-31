import { FC, ReactNode } from 'react';

import styles from '@/styles/components/elements/buttons/primaryButton.module.scss';

type Props = {
  onClick: () => void;
  children: ReactNode;
  type: 'navy' | 'wine_red' | 'light_blue' | 'outline';
};

const PrimaryButton: FC<Props> = (props) => {
  const { onClick, children, type } = props;
  const className = (() => {
    switch (type) {
      case 'navy':
        return `${styles.button__navy}`;
      case 'wine_red':
        return `${styles.button__wine_red}`;
      case 'light_blue':
        return `${styles.button__light_blue}`;
      case 'outline':
        return `${styles.button__outline}`;
      default:
        const check: never = type;
    }
  })();
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
export default PrimaryButton;
