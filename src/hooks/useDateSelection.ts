import { useEffect, useState } from 'react';
import { Control, FieldValues } from 'react-hook-form';

import { useSelectedDate } from './useSelectedDate';

type UseDateSelectionProps<TDate extends FieldValues = FieldValues> = {
  control: Control<TDate, any>;
  defaultDate?: string;
  isSubmitSuccessful?: boolean;
  setValue: (value: string) => void;
};

export const useDateSelection = <TDate extends FieldValues = FieldValues>({
  control,
  defaultDate,
  isSubmitSuccessful,
  setValue,
}: UseDateSelectionProps<TDate>) => {
  const { yearsData, monthData, dayData } = useSelectedDate(control);
  const [year, setYear] = useState<string | undefined>(undefined);
  const [month, setMonth] = useState<string | undefined>(undefined);
  const [day, setDay] = useState<string | undefined>(undefined);

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
      setYear(undefined);
      setMonth(undefined);
      setDay(undefined);
    }
  }, [isSubmitSuccessful]);

  useEffect(() => {
    if (!defaultDate) return;
    setYear(extractDate('year', defaultDate));
    setMonth(extractDate('month', defaultDate));
    setDay(extractDate('day', defaultDate));
  }, []);

  return { yearsData, monthData, dayData, selectedYear, selectedMonth, selectedDay, extractDate };
};
