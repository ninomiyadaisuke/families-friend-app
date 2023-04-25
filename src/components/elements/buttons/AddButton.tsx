import cx from 'classnames';
import { FC } from 'react';

import styles from '@/styles/components/elements/buttons/addButton.module.scss';

type Props = {
  type: 'white' | 'blue';
  onClick?: () => void;
};

const AddButton: FC<Props> = (props) => {
  const { type, onClick } = props;
  return (
    <a
      onClick={onClick}
      tabIndex={0}
      className={cx(styles.button, type === 'blue' ? styles.blueButton : styles.whiteButton)}
    ></a>
  );
};

export default AddButton;
