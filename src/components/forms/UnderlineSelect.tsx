import { FC } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import styles from '@/styles/components/forms/underlineSelect.module.scss';

type Props = {
  options: { value: string }[];
  registration: UseFormRegisterReturn;
  name: 'year' | 'month' | 'day';
  errorMesseage?: string;
};

const UnderlineSelect: FC<Props> = (props) => {
  const { options, name, errorMesseage, registration } = props;

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
      <select id={name} {...registration}>
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
