import React, { FC, useEffect, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { AccordionWrapper } from '@/components/elements/utils';
import { useAccordion } from '@/hooks/useAccordion';
import styles from '@/styles/components/forms/primarySelect.module.scss';

type Props = {
  id?: string;
  selectLabel?: string;
  options: { [key in 'value']: string }[];
  registration?: UseFormRegisterReturn;
  isSubmitSuccessful?: boolean;
  setValue: (value: string) => void;
};

const PrimarySelect: FC<Props> = (props) => {
  const { selectLabel, registration, options, isSubmitSuccessful, id, setValue } = props;
  const { isOpen, setIsOpen } = useAccordion();
  const [selected, setSelected] = useState(selectLabel);

  const choiseRadio = (value: string) => {
    setSelected(value);
    setValue(value);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return;
    setIsOpen((prev) => !prev);
    const inputElement = e.target as HTMLInputElement;

    setSelected(inputElement.value);
    setValue(inputElement.value);
    e.preventDefault();
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputElement = e.target as HTMLInputElement;
    inputElement.checked = !inputElement.checked;
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isSubmitSuccessful) return;
    setSelected(selectLabel);
  }, [isSubmitSuccessful]);

  return (
    <div className={styles.select}>
      <div className={styles.select__container}>
        <label>
          <input id="selected" type={'checkbox'} onKeyDown={handleKeyDown} value={selected} {...registration} />
          <span onClick={handleClick}>{selected}</span>
        </label>
        <i className={isOpen ? styles.select__arrow_down : styles.select__arrow} />
        <AccordionWrapper>
          {options.map((option) => (
            <label key={option.value}>
              <input
                id={id}
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
