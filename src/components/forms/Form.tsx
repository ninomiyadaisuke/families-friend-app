import { zodResolver } from '@hookform/resolvers/zod';
import cx from 'classnames';
import { ReactNode, useEffect } from 'react';
import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  UseFieldArrayReturn,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';
import type { ZodType, ZodTypeDef } from 'zod';

import styles from '@/styles/components/forms/form.module.scss';

type FormProps<TFormValues extends FieldValues, Schema, TFieldArrayFields extends FieldValues = FieldValues> = {
  className?: string;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>, fieldArray: UseFieldArrayReturn<TFieldArrayFields>) => ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
  schema?: Schema;
  name?: string;
};

const Form = <
  TFormValues extends Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>(
  props: FormProps<TFormValues, Schema>
) => {
  const { onSubmit, children, className, options, id, schema, name } = props;
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema && zodResolver(schema),
  });

  const fieldArray = useFieldArray<any>({
    name: name as string,
    control: methods.control,
  });

  const {
    reset,
    formState: { isSubmitSuccessful },
  } = methods;

  // useEffect(() => {
  //   if (!isSubmitSuccessful) return;
  //   reset();
  // }, [isSubmitSuccessful, reset]);

  return (
    <form className={cx(styles.form, className && className)} onSubmit={methods.handleSubmit(onSubmit)} id={id}>
      {children(methods, fieldArray)}
    </form>
  );
};

export default Form;
