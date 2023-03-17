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
  return (
    <Form<FormValues, typeof loginSchema>
      onSubmit={login}
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
            src="/icon/email-icon.svg"
            alt="メールアイコン"
            errorMesseage={formState.errors.email?.message}
            registration={register('email')}
            required="required"
          />
          <PrimaryInput
            type="password"
            placeholder="パスワード"
            iconType="password"
            src="/icon/password-icon.svg"
            alt="password-icon"
            errorMesseage={formState.errors.password?.message}
            registration={register('password')}
            required="required"
          />
          <Link href={'/'}>パスワードを忘れた場合</Link>
          <div className={styles.forms__button}>
            <PrimaryButton type="navy" text="ログイン" />
          </div>
        </>
      )}
    </Form>
  );
};

export default LoginForm;
