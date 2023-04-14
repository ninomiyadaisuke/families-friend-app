import { useEffect, useState } from 'react';
import { Control, UseFormRegisterReturn } from 'react-hook-form';

import { useSelectedDate } from '@/hooks/useSelectedDate';
import styles from '@/styles/components/forms/underlineDateSelect.module.scss';

import { UnderlineSelect } from '.';

type Props<TDate extends Record<string, unknown>> = {
  registration?: UseFormRegisterReturn;
  control: Control<TDate, any>;
  errorMesseage?: string;
  setValue: (value: string) => void;
  isSubmitSuccessful?: boolean;
  defaultDate?: string;
};

const UnderlineDateSelect = <TDate extends Record<string, unknown>>(props: Props<TDate>) => {
  const { registration, control, setValue, errorMesseage, isSubmitSuccessful, defaultDate } = props;
  const { yearsData, monthData, dayData } = useSelectedDate(control);
  const [year, setYear] = useState<string | undefined>('');
  const [month, setMonth] = useState<string | undefined>('');
  const [day, setDay] = useState<string | undefined>('');

  function extractDate(type: 'year' | 'month' | 'day', date?: string) {
    if (!date) return;
    const [year, month, day] = date.split('-');
    switch (type) {
      case 'year':
        return year;
      case 'month':
        return month;
      case 'day':
        return day;
      default:
        throw new Error(`Invalid type: ${type}`);
    }
  }

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

  useEffect(() => {
    if (!isSubmitSuccessful) {
      setYear('');
      setMonth('');
      setDay('');
    }
  }, [isSubmitSuccessful]);

  useEffect(() => {
    if (!defaultDate) return;
    setYear(extractDate('year', defaultDate));
    setMonth(extractDate('month', defaultDate));
    setDay(extractDate('day', defaultDate));
  }, []);

  return (
    <div className={styles.selected}>
      <div className={styles.selected__container}>
        <UnderlineSelect
          options={yearsData}
          name="year"
          onChange={selectedYear}
          defaultValue={extractDate('year', defaultDate)}
        />
        <UnderlineSelect
          options={monthData}
          name="month"
          onChange={selectedMonth}
          defaultValue={extractDate('month', defaultDate)}
        />
        <UnderlineSelect
          options={dayData}
          name="day"
          onChange={selectedDay}
          defaultValue={extractDate('day', defaultDate)}
        />
      </div>
      <input type="text" readOnly {...registration} hidden />
      {errorMesseage && <p>{errorMesseage}</p>}
    </div>
  );
};

export default UnderlineDateSelect;
