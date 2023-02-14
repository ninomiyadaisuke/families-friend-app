import { useState } from 'react';
import { Control, UseFormRegisterReturn } from 'react-hook-form';

import { useSelectedDate } from '@/hooks/useSelectedDate';
import styles from '@/styles/components/forms/underlineDateSelect.module.scss';

import { UnderlineSelect } from '.';

type Props<TDate extends Record<string, unknown>> = {
  registration: UseFormRegisterReturn;
  control: Control<TDate, any>;
  errorMesseage?: string;
  setValue: (value: string) => void;
};

const UnderlineDateSelect = <TDate extends Record<string, unknown>>(props: Props<TDate>) => {
  const { registration, control, setValue } = props;
  const { yearsData, monthData, dayData } = useSelectedDate(control);
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const selectedYear = (value: string) => {
    setYear(value);
    setValue(`${value}-${month}-${day}`);
  };

  const selectedMonth = (value: string) => {
    setMonth(value);
    setValue(`${year}-${value}-${day}`);
  };

  const selectedDay = (value: string) => {
    setDay(value);
    setValue(`${year}-${month}-${value}`);
  };
  return (
    <div className={styles.selected}>
      <label>生年月日</label>
      <div className={styles.selected__container}>
        <UnderlineSelect options={yearsData} name="year" onChange={selectedYear} />
        <UnderlineSelect options={monthData} name="month" onChange={selectedMonth} />
        <UnderlineSelect options={dayData} name="day" onChange={selectedDay} />
      </div>
      <input type="text" {...registration} hidden />
    </div>
  );
};

export default UnderlineDateSelect;
