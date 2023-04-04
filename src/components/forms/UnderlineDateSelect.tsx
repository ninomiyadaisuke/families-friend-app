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
};

const UnderlineDateSelect = <TDate extends Record<string, unknown>>(props: Props<TDate>) => {
  const { registration, control, setValue, errorMesseage, isSubmitSuccessful } = props;
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

  useEffect(() => {
    if (!isSubmitSuccessful) {
      setYear('');
      setMonth('');
      setDay('');
    }
  }, [isSubmitSuccessful]);

  return (
    <div className={styles.selected}>
      <div className={styles.selected__container}>
        <UnderlineSelect options={yearsData} name="year" onChange={selectedYear} />
        <UnderlineSelect options={monthData} name="month" onChange={selectedMonth} />
        <UnderlineSelect options={dayData} name="day" onChange={selectedDay} />
      </div>
      <input type="text" {...registration} hidden />
      {errorMesseage && <p>{errorMesseage}</p>}
    </div>
  );
};

export default UnderlineDateSelect;
