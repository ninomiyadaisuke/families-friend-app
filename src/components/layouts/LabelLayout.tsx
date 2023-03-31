import cx from 'classnames';
import { FC, ReactNode } from 'react';

import styles from '@/styles/components/elements/utils/label.module.scss';

import { RequiredBadge } from '../elements/utils';

type Props = {
  children: (label: string) => ReactNode;
  required?: 'required';
  label: string;
  type: 'flex' | 'block';
  widthStyle?: string;
  flexKeep?: boolean;
};

const LabelLayout: FC<Props> = (props) => {
  const { children, label, required, type, widthStyle, flexKeep } = props;

  const className = (() => {
    switch (type) {
      case 'flex':
        return cx(styles.inputContainer, styles.inputContainer_flex);
      case 'block':
        return cx(styles.inputContainer, styles.inputContainer_block);
      default:
        const _: never = type;
    }
  })();

  return (
    <div className={cx(styles.labelContainer, { [styles.labelContainerFlex]: flexKeep })}>
      <label
        className={cx(
          styles.labelContainer__label,
          type === 'flex' ? styles.labelContainer__label_center : styles.labelContainer__label_start
        )}
        htmlFor={label}
      >
        {label}
        {required && (
          <div className={styles.labelContainer__badge}>
            <RequiredBadge />
          </div>
        )}
      </label>

      <div className={cx(className, widthStyle)}>{children(label)}</div>
    </div>
  );
};

export default LabelLayout;
