import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { z } from 'zod';

import { PrimaryButton } from '@/components/elements/buttons';
import { Form, PrimaryInput } from '@/components/forms';
import styles from '@/styles/features/auth/components/loginForm.module.scss';

const initialState = {
  email: '',
  password: '',
} as const satisfies {
  [key: string]: string;
};

const loginSchema = z.object({
  password: z
    .string()
    .min(1, 'パスワードを入力してください')
    .min(8, 'パスワードは8文字以上で入力してください')
    .regex(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i, 'パスワードは半角英数字混合で入力してください'),
  email: z
    .string()
    .min(1, 'メールアドレスを入力してください')
    .email({ message: 'メールアドレスの形式で入力してください' }),
});

type FormValues = z.infer<typeof loginSchema>;

const LoginForm: FC = () => {
  const router = useRouter();
  const login = async (values: FormValues) => {
    await fetch('/api/auth/session', {
      method: 'POST',
      body: JSON.stringify({ ...values, authentication: 'login' }),
      headers: { 'Content-Type': 'application/json' },
    });
    router.push('/profile');
  };
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
