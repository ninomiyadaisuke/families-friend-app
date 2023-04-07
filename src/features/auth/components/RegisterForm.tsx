import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { FC } from 'react';

import { PrimaryButton } from '@/components/elements/buttons';
import { Form, PrimaryInput, PrimarySelect, UnderlineDateSelect } from '@/components/forms';
import { LabelLayout } from '@/components/layouts';
import type { FormValues } from '@/features/auth/api/register';
import { registerSchema, signup } from '@/features/auth/api/register';
import { options } from '@/libs/data';
import styles from '@/styles/features/auth/components/registerForm.module.scss';

const initialState = {
  email: '',
  confirm_email: '',
  password: '',
  confirm_password: '',
  first_name: '',
  last_name: '',
  first_name_kana: '',
  last_name_kana: '',
  birthday: '',
  relationship: '',
};

type TRelationship = '' | '世帯主' | '配偶者' | '子供' | '親' | '同居人';

const RegisterForm: FC = () => {
  const mutation = useMutation(signup);
  return (
    <Form<FormValues, typeof registerSchema>
      onSubmit={(values) => mutation.mutate(values)}
      options={{
        defaultValues: initialState as Record<string, unknown>,
      }}
      schema={registerSchema}
      className={styles.forms}
    >
      {({ register, formState, control, setValue }) => (
        <>
          <div className={styles.forms__container}>
            <PrimaryInput
              type="email"
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
                errorMesseage={formState.errors.last_name?.message}
                registration={register('last_name')}
              />
              <PrimaryInput
                type="text"
                placeholder="名"
                iconType="user"
                responsiveImageNone="none"
                src="/icon/user-icon.svg"
                alt="user-icon"
                errorMesseage={formState.errors.first_name?.message}
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
                errorMesseage={formState.errors.last_name_kana?.message}
                registration={register('last_name_kana')}
              />
              <PrimaryInput
                type="text"
                placeholder="メイ"
                iconType="user"
                responsiveImageNone="none"
                src="/icon/user-icon.svg"
                alt="user-icon"
                errorMesseage={formState.errors.first_name_kana?.message}
                registration={register('first_name_kana')}
              />
            </div>
            <LabelLayout
              label="生年月日"
              type="flex"
              flexKeep={true}
              children={() => (
                <UnderlineDateSelect
                  errorMesseage={formState.errors.birthday?.message}
                  control={control}
                  registration={register('birthday')}
                  setValue={(value) => setValue('birthday', value)}
                />
              )}
            />
            <LabelLayout
              label="役割"
              type="flex"
              children={(label) => (
                <PrimarySelect
                  id={label}
                  selectLabel="役割を選択"
                  options={options}
                  registration={register('relationship')}
                  isSubmitSuccessful={formState.isSubmitSuccessful}
                  setValue={(value) => setValue('relationship', value as TRelationship)}
                />
              )}
            />
          </div>
          <div className={styles.forms__terms}>
            <p>
              登録ボタンをクリックすることで、<Link href={'/terms'}>利用規約</Link>と
              <Link href={'/'}>個人情報保護方針</Link>
              に同意いただいたものと見なします。
            </p>
          </div>
          <div className={styles.forms__button}>
            <PrimaryButton type="wine_red" text="登録" loading={mutation.isLoading} />
          </div>
        </>
      )}
    </Form>
  );
};

export default RegisterForm;
