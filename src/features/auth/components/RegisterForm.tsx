import Link from 'next/link';
import { FC } from 'react';
import { z } from 'zod';

import { PrimaryButton } from '@/components/elements/buttons';
import { CheckBox, Form, PrimaryInput, PrimarySelect, UnderlineDateSelect } from '@/components/forms';
import styles from '@/styles/features/auth/components/registerForm.module.scss';

const options = [{ value: '世帯主' }, { value: '配偶書' }, { value: '子供' }, { value: '親' }, { value: '同居人' }];

const initialState = {
  email: '',
  confirm_email: '',
  password: '',
  confirm_password: '',
  first_name: '',
  last_name: '',
  first_name_kana: '',
  last_name_kana: '',
  // barthday: undefined,
  relationship: '',
  login_type: '',
};

const registerSchema = z
  .object({
    login_type: z.union([z.literal(''), z.literal('retention')]),
    password: z
      .string()
      .min(1, 'パスワードを入力してください')
      .min(8, 'パスワードは8文字以上で入力してください')
      .regex(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i, 'パスワードは半角英数字混合で入力してください')
      .default(''),
    confirm_password: z.string().min(1, '確認用のパスワードを入力してください'),
    email: z
      .string()
      .min(1, 'メールアドレスを入力してください')
      .email({ message: 'メールアドレスの形式で入力してください' }),
    confirm_email: z.string().min(1, '確認用のメールアドレスを入力してください'),
    first_name: z.string(),
    first_name_kana: z.string(),
    last_name: z.string(),
    last_name_kana: z.string(),
    relationship: z.union([
      z.literal('世帯主'),
      z.literal(''),
      z.literal('配偶者'),
      z.literal('子供'),
      z.literal('親'),
      z.literal('同居人'),
    ]),
  })
  .superRefine(({ password, confirm_password, email, confirm_email }, ctx) => {
    if (password !== confirm_password) {
      ctx.addIssue({
        path: ['confirm_password'],
        code: 'custom',
        message: 'パスワードが一致しません',
      });
    }
    if (email !== confirm_email) {
      ctx.addIssue({
        path: ['confirm_email'],
        code: 'custom',
        message: 'メールアドレスが一致しません',
      });
    }
  });

type FormValues = z.infer<typeof registerSchema>;

const RegisterForm: FC = () => {
  const login = async (values: FormValues) => {
    // console.log(values);
  };
  return (
    <Form<FormValues, typeof registerSchema>
      onSubmit={login}
      options={{
        defaultValues: initialState as Record<string, unknown>,
      }}
      schema={registerSchema}
      className={styles.forms}
    >
      {({ register, formState, control }) => (
        <>
          <div className={styles.forms__container}>
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
              type="text"
              placeholder="メールアドレス確認"
              iconType="email"
              src="/icon/email-icon.svg"
              alt="メールアイコン"
              errorMesseage={formState.errors.confirm_email?.message}
              registration={register('confirm_email')}
              required="required"
            />

            <div className={styles.forms__pass}>
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
              <PrimaryInput
                type="password"
                placeholder="パスワード確認"
                iconType="password"
                src="/icon/password-icon.svg"
                alt="password-icon"
                errorMesseage={formState.errors.confirm_password?.message}
                registration={register('confirm_password')}
                required="required"
              />
            </div>

            <div className={styles.forms__name}>
              <PrimaryInput
                type="text"
                placeholder="姓"
                iconType="user"
                src="/icon/user-icon.svg"
                alt="user-icon"
                registration={register('last_name')}
              />
              <PrimaryInput
                type="text"
                placeholder="名"
                iconType="user"
                responsiveImageNone="none"
                src="/icon/user-icon.svg"
                alt="user-icon"
                registration={register('first_name')}
              />
            </div>
            <div className={styles.forms__name}>
              <PrimaryInput
                type="text"
                placeholder="セイ"
                iconType="user"
                src="/icon/user-icon.svg"
                alt="user-icon"
                registration={register('last_name_kana')}
              />
              <PrimaryInput
                type="text"
                placeholder="メイ"
                iconType="user"
                responsiveImageNone="none"
                src="/icon/user-icon.svg"
                alt="user-icon"
                registration={register('first_name_kana')}
              />
            </div>
            {/* <div>
              <UnderlineDateSelect register={register} errors={formState.errors} control={control} />
            </div> */}
            <div className={styles.forms__select}>
              <PrimarySelect
                label="役割"
                selectLabel="役割を選択"
                options={options}
                registration={register('relationship')}
              />
            </div>
          </div>
          <div className={styles.forms__check}>
            <CheckBox label="ログイン状態を保持" registration={register('login_type')} />
            <p>
              登録ボタンをクリックすることで、<Link href={'/terms'}>利用規約</Link>と
              <Link href={'/'}>個人情報保護方針</Link>
              に同意いただいたものと見なします。
            </p>
          </div>
          <div className={styles.forms__button}>
            <PrimaryButton type="navy" text="ログイン" />
          </div>
        </>
      )}
    </Form>
  );
};

export default RegisterForm;
