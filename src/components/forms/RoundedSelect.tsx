import cx from 'classnames';
import { FC } from 'react';

import styles from '@/styles/components/forms/roundedSelect.module.scss';

type Props = {
  options: { value: string }[];
  id?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  size: 'short' | 'midule';
  defaultValue?: string;
};

const RoundedSelect: FC<Props> = (props) => {
  const { options, id, onChange, disabled, size, defaultValue } = props;

  const containerSize = (() => {
    switch (size) {
      case 'short':
        return styles.selectContainer_short;
      case 'midule':
        return styles.selectContainer_midule;
      default:
        return '';
    }
  })();

  return (
    <div
      className={cx(styles.selectContainer, { [styles.selectContainer_disabled]: disabled }, { [containerSize]: size })}
    >
      <select
        className={styles.selectContainer__select}
        disabled={disabled}
        defaultValue={defaultValue}
        id={id}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option />
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RoundedSelect;
