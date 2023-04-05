import { FC } from 'react';

import { AddButton, PrimaryButton } from '@/components/elements/buttons';
import { Form, PersonalInfo, PrimaryInput } from '@/components/forms';
import { FormValues } from '@/schema/personalInfoSchema';
import { schema } from '@/schema/personalInfoSchema';
import styles from '@/styles/features/profile/components/editProfile.module.scss';

const initialState = {
  file: '',
  first_name: '',
  last_name: '',
  first_name_kana: '',
  last_name_kana: '',
  email: undefined,
  phone_number: undefined,
  birthday: undefined,
  relationship: undefined,
};

const update = (values: FormValues) => {
  const test = values;
};

const EditProfile: FC = () => {
  return (
    <Form<FormValues, typeof schema>
      onSubmit={update}
      options={{ defaultValues: initialState }}
      schema={schema}
      className={styles.profile}
    >
      {({ register, setValue, control, formState }, { fields, append, remove }) => (
        <>
          <PersonalInfo
            register={register}
            control={control}
            title="ユーザー情報"
            setValue={setValue}
            formState={formState}
          />
          <div className={styles.profile__address}>
            <h3>現住所</h3>
            <PrimaryInput
              type="text"
              registration={register('first_name')}
              iconType="zipCode"
              src="/icon/zip-code-icon.svg"
              alt="zip-code-icon"
              placeholder="郵便番号"
              errorMesseage={formState.errors.first_name?.message}
            />
            <PrimaryInput
              type="text"
              registration={register('first_name')}
              iconType="address"
              src="/icon/address-icon.svg"
              alt="zip-code-icon"
              placeholder="住所"
              errorMesseage={formState.errors.first_name?.message}
            />
          </div>
          <div className={styles.profile__add}>
            <h3>世帯員追加</h3>
            <AddButton type="blue" />
          </div>
          <PrimaryButton text="更新" type="navy" />
        </>
      )}
    </Form>
  );
};

export default EditProfile;
