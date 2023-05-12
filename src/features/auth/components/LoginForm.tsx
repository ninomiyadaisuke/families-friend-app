import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { FC } from 'react';

import { PrimaryButton } from '@/components/elements/buttons';
import { Form, PrimaryInput } from '@/components/forms';
import type { FormValues } from '@/features/auth/api/login';
import { login, loginSchema } from '@/features/auth/api/login';
import styles from '@/styles/features/auth/components/loginForm.module.scss';

const initialState = {
  email: '',
  password: '',
} as const satisfies {
  [key: string]: string;
};

const LoginForm: FC = () => {
  const mutation = useMutation(login);
  return (
    <Form<FormValues, typeof loginSchema>
      onSubmit={(values) => mutation.mutate(values)}
      options={{ defaultValues: initialState }}
      schema={loginSchema}
      className={styles.forms}
    >
      {({ register, formState }) => (
        <>
          <PrimaryInput
            type="text"
            placeholder="メールアドレス"
            iconType="email"
            errorMesseage={formState.errors.email?.message as string | undefined}
            registration={register('email')}
            required="required"
          />
          <PrimaryInput
            type="password"
            placeholder="パスワード"
            iconType="password"
            errorMesseage={formState.errors.password?.message as string | undefined}
            registration={register('password')}
            required="required"
          />
          <Link href={'/'}>パスワードを忘れた場合</Link>
          <div className={styles.forms__button}>
            <PrimaryButton type="navy" text="ログイン" loading={mutation.isLoading} />
          </div>
        </>
      )}
    </Form>
  );
};

export default LoginForm;
