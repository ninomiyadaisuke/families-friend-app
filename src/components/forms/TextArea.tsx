import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { ErrorText } from '@/components/elements/texts';

type Props = {
  registration: UseFormRegisterReturn;
  errorMesseage?: string;
};

const TextArea: FC<Props> = (props) => {
  const { registration, errorMesseage } = props;
  return (
    <div>
      <textarea {...registration}></textarea>
      {errorMesseage && <ErrorText>{errorMesseage}</ErrorText>}
    </div>
  );
};

export default TextArea;
