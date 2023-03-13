import { useEffect, useState } from 'react';
import { Control, UseFormRegisterReturn } from 'react-hook-form';

import { useSelectedDate } from '@/hooks/useSelectedDate';
import styles from '@/styles/components/forms/roundedDateSelect.module.scss';

type Props<TDate extends Record<string, unknown>> = {
  registration: UseFormRegisterReturn;
  control: Control<TDate, any>;
  errorMesseage?: string;
  setValue: (value: string) => void;
  isSubmitSuccessful?: boolean;
};

const RoundedDateSelect = <TDate extends Record<string, unknown>>(props: Props<TDate>) => {
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
  return <div className={styles.selectContainer}>RoundedDateSelect</div>;
};

export default RoundedDateSelect;
