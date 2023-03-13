import { FC } from 'react';

import styles from '@/styles/components/forms/roundedSelect.module.scss';

type Props = {
  options: { value: string }[];
  id?: string;
  errorMesseage?: string;
  onChange: (value: string) => void;
};

const RoundedSelect: FC<Props> = (props) => {
  const { options, id, errorMesseage, onChange } = props;

  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.selectContainer__select}
        id={id}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option />
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      {errorMesseage && <p>{errorMesseage}</p>}
    </div>
  );
};

export default RoundedSelect;
