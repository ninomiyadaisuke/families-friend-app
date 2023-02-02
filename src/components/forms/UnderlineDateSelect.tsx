import { FC } from 'react';
import { Control, FieldErrorsImpl, FieldValues, FormState, UseFormRegister } from 'react-hook-form';

import { useSelectedDate } from '@/hooks/useSelectedDate';
import styles from '@/styles/components/forms/underlineDateSelect.module.scss';

import { UnderlineSelect } from '.';

type DateSelectKeys = 'year' | 'month' | 'day';
type TDateSelect = { [K in DateSelectKeys]: string };

type Props = {
  register: UseFormRegister<TDateSelect>;
  errors: Partial<FieldErrorsImpl<TDateSelect>>;
  control: Control<TDateSelect, any>;
};

const UnderlineDateSelect: FC<Props> = (props) => {
  const { register, control, errors } = props;

  const { yearsData, monthData, dayData } = useSelectedDate(control);

  return (
    <div className={styles.selected}>
      <label>生年月日</label>
      <div className={styles.selected__container}>
        <UnderlineSelect
          options={yearsData}
          name="year"
          registration={register('year')}
          errorMesseage={errors.year?.message as string}
        />
        <UnderlineSelect
          options={monthData}
          name="month"
          registration={register('month')}
          errorMesseage={errors.month?.message as string}
        />
        <UnderlineSelect
          options={dayData}
          name="day"
          registration={register('day')}
          errorMesseage={errors.day?.message as string}
        />
      </div>
    </div>
  );
};

export default UnderlineDateSelect;
