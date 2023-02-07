import React, { FC, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { AccordionWrapper } from '@/components/elements/utils';
import { useAccordion } from '@/hooks/useAccordion';
import styles from '@/styles/components/forms/primarySelect.module.scss';

import { RequiredBadge } from '../elements/utils';

type Props = {
  label: string;
  selectLabel: string;
  mandatory?: boolean;
  options: { [key in 'value']: string }[];
  registration: UseFormRegisterReturn;
};

const PrimarySelect: FC<Props> = (props) => {
  const { label, mandatory, selectLabel, registration, options } = props;
  const { isOpen, setIsOpen } = useAccordion();
  const [selected, setSelected] = useState(selectLabel);

  const choiseRadio = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return;
    setIsOpen((prev) => !prev);
    const inputElement = e.target as HTMLInputElement;
    setSelected(inputElement.value);
    e.preventDefault();
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputElement = e.target as HTMLInputElement;
    inputElement.checked = !inputElement.checked;
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.select}>
      <div className={styles.select__label}>
        <label onClick={handleClick} htmlFor="selected">
          {label}
        </label>
        {mandatory && (
          <div className={styles.select__label_badge}>
            <RequiredBadge />
          </div>
        )}
      </div>
      <div className={styles.select__container}>
        <label>
          <input id="selected" type={'checkbox'} readOnly onKeyDown={handleKeyDown} value={selected} />
          <span onClick={handleClick}>{selected}</span>
        </label>

        <i className={isOpen ? styles.select__arrow_down : styles.select__arrow} />
        <AccordionWrapper>
          {options.map((option) => (
            <label key={option.value}>
              <input
                {...registration}
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
                value={option.value}
                tabIndex={isOpen ? 0 : -1}
                type="radio"
              />

              <span onClick={() => choiseRadio(option.value)}>{option.value}</span>
            </label>
          ))}
        </AccordionWrapper>
      </div>
    </div>
  );
};

export default PrimarySelect;
