import { zodResolver } from '@hookform/resolvers/zod';
import cx from 'classnames';
import { ReactNode, useEffect } from 'react';
import { FieldValues, SubmitHandler, useFieldArray, useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import type { ZodType, ZodTypeDef } from 'zod';

import styles from '@/styles/components/forms/form.module.scss';

type FormProps<TFormValues extends FieldValues, Schema> = {
  className?: string;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>, test: any) => ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
  schema?: Schema;
};

const Form = <
  TFormValues extends Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>(
  props: FormProps<TFormValues, Schema>
) => {
  const { onSubmit, children, className, options, id, schema } = props;
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema && zodResolver(schema),
  });

  const test = useFieldArray<any>({
    name: 'test',
    control: methods.control,
  });

  const {
    reset,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (!isSubmitSuccessful) return;
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form className={cx(styles.form, className && className)} onSubmit={methods.handleSubmit(onSubmit)} id={id}>
      {children(methods, test)}
    </form>
  );
};

export default Form;
