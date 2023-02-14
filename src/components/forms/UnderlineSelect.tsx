import { FC } from 'react';

import styles from '@/styles/components/forms/underlineSelect.module.scss';

type Props = {
  options: { value: string }[];
  name: 'year' | 'month' | 'day';
  errorMesseage?: string;
  onChange: (value: string) => void;
};

const UnderlineSelect: FC<Props> = (props) => {
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
  // console.log(options)

  return (
    <div className={name === 'year' ? styles.selectYear : styles.select}>
      <select
        id={name}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option hidden />
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

export default UnderlineSelect;
