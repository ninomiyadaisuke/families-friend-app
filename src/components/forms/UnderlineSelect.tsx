import { FC } from 'react';

import styles from '@/styles/components/forms/underlineSelect.module.scss';

type Props = {
  options: { value: string }[];
  name: 'year' | 'month' | 'day';
  errorMesseage?: string;
  onChange: (value: string) => void;
  defaultValue?: string;
};

const UnderlineSelect: FC<Props> = (props) => {
  const { options, name, errorMesseage, onChange, defaultValue } = props;

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
    <div className={name === 'year' ? styles.selectYear : styles.select}>
      <select
        id={name}
        defaultValue={defaultValue}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option />
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </select>
      <span>{yearOrMonthOrDay}</span>
      {errorMesseage && <p>{errorMesseage}</p>}
    </div>
  );
};

export default UnderlineSelect;
