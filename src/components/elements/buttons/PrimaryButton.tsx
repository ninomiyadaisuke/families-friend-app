import { FC } from 'react';

import { Spinner } from '@/components/elements/utils';
import styles from '@/styles/components/elements/buttons/primaryButton.module.scss';

type Props = {
  text: string;
  type: 'navy' | 'wine_red' | 'light_blue' | 'outline';
  onClick?: () => void;
  loading?: boolean;
};

const PrimaryButton: FC<Props> = (props) => {
  const { onClick, type, text, loading } = props;

  const color = type === 'light_blue' || type === 'navy' ? 'red' : 'blue';

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
    <button className={className} onClick={onClick} disabled={loading}>
      {loading ? (
        <div className={styles.spinner}>
          <Spinner color={color} />
        </div>
      ) : (
        text
      )}
    </button>
  );
};
export default PrimaryButton;
