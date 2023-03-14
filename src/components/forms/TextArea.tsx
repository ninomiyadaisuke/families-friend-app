import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { ErrorText } from '@/components/elements/texts';
import styles from '@/styles/components/forms/textArea.module.scss';

type Props = {
  registration: UseFormRegisterReturn;
  errorMesseage?: string;
  placeholder: string;
  id: string;
};

const TextArea: FC<Props> = (props) => {
  const { registration, errorMesseage, id, placeholder } = props;
  return (
    <div className={styles.textContainer}>
      <textarea className={styles.textContainer__text} id={id} {...registration} placeholder={placeholder} rows={4} />
      {errorMesseage && <ErrorText positon={styles.textContainer__text_error}>{errorMesseage}</ErrorText>}
    </div>
  );
};

export default TextArea;
