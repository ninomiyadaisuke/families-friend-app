import { Control, FieldValues, UseFormRegisterReturn } from 'react-hook-form';

import { useDateSelection } from '@/hooks/useDateSelection';
import styles from '@/styles/components/forms/underlineDateSelect.module.scss';

import { UnderlineSelect } from '.';

type Props<TDate extends FieldValues> = {
  registration?: UseFormRegisterReturn;
  control: Control<TDate, any>;
  errorMesseage?: string;
  setValue: (value: string) => void;
  isSubmitSuccessful?: boolean;
  defaultDate?: string;
};

const UnderlineDateSelect = <TDate extends FieldValues>(props: Props<TDate>) => {
  const { registration, control, setValue, errorMesseage, isSubmitSuccessful, defaultDate } = props;

  const { yearsData, monthData, dayData, selectedYear, selectedMonth, selectedDay, extractDate } =
    useDateSelection<TDate>({
      control,
      defaultDate,
      isSubmitSuccessful,
      setValue,
    });

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
