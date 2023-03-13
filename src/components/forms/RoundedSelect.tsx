import cx from 'classnames';
import { FC } from 'react';

import styles from '@/styles/components/forms/roundedSelect.module.scss';

type Props = {
  options: { value: string }[];
  name: 'year' | 'month' | 'day';
  errorMesseage?: string;
  onChange: (value: string) => void;
};

const RoundedSelect: FC<Props> = (props) => {
  const { options, name, errorMesseage, onChange } = props;

  const yearOrMonthOrDay = (() => {
    switch (name) {
      case 'year':
        return '年';
      case 'month':
        return '月';
      case 'day':
        return '日';
      default:
        const _: never = name;
    }
  })();

  return (
    <div className={cx(styles.selectContainer)}>
      <select
        id={name}
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
      <span>{yearOrMonthOrDay}</span>
      {errorMesseage && <p>{errorMesseage}</p>}
    </div>
  );
};

export default RoundedSelect;
