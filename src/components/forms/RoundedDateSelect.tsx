import { Control, UseFormRegisterReturn } from 'react-hook-form';

import { useDateSelection } from '@/hooks/useDateSelection';
import styles from '@/styles/components/forms/roundedDateSelect.module.scss';

import { RoundedSelect } from './';

type Props<TDate extends Record<string, unknown>> = {
  registration: UseFormRegisterReturn;
  control: Control<TDate, any>;
  errorMesseage?: string;
  setValue: (value: string) => void;
  isSubmitSuccessful?: boolean;
  lable: string;
  defaultDate?: string;
};

const RoundedDateSelect = <TDate extends Record<string, unknown>>(props: Props<TDate>) => {
  const { registration, control, setValue, errorMesseage, isSubmitSuccessful, lable, defaultDate } = props;
  const { yearsData, monthData, dayData, selectedYear, selectedMonth, selectedDay, extractDate } = useDateSelection({
    control,
    defaultDate,
    isSubmitSuccessful,
    setValue,
  });
  return (
    <div className={styles.selectContainer}>
      <RoundedSelect
        options={yearsData}
        onChange={selectedYear}
        id={lable}
        size="midule"
        defaultValue={extractDate('year', defaultDate)}
      />
      <span>年</span>
      <RoundedSelect
        options={monthData}
        onChange={selectedMonth}
        size="short"
        defaultValue={extractDate('month', defaultDate)}
      />
      <span>月</span>
      <RoundedSelect
        options={dayData}
        onChange={selectedDay}
        size="short"
        defaultValue={extractDate('day', defaultDate)}
      />
      <span>日</span>
      <input type="text" {...registration} hidden />
      {errorMesseage && <p>{errorMesseage}</p>}
    </div>
  );
};

export default RoundedDateSelect;
