import { FC } from 'react';
import { z } from 'zod';

import { AddButton, PrimaryButton } from '@/components/elements/buttons';
import { Form, PersonalInfo, PrimaryInput } from '@/components/forms';
import styles from '@/styles/features/profile/components/editProfile.module.scss';

const initialState = {
  file: '',
  first_name: '',
  last_name: '',
  first_name_kana: '',
  last_name_kana: '',
  email: undefined,
  phone_number: undefined,
  hobby: undefined,
  birthday: undefined,
  relationship: undefined,
  zip_code: undefined,
  address: undefined,
  building: undefined,
};

export const schema = z.object({
  file: z.union([z.string(), z.custom<FileList>().transform((file) => file[0])]),
  first_name: z.string(),
  first_name_kana: z.string(),
  last_name: z.string(),
  last_name_kana: z.string(),
  email: z.string().optional(),
  phone_number: z.string().optional(),
  birthday: z.string().optional(),
  hobby: z.string(),
  relationship: z.union([
    z.literal('世帯主'),
    z.literal('配偶者'),
    z.literal('子供'),
    z.literal('親'),
    z.literal('同居人'),
    z.literal(''),
  ]),
  zip_code: z.string().optional(),
  address: z.string().optional(),
  building: z.string().optional(),
  members: z
    .array(
      z.object({
        file: z.union([z.string(), z.custom<FileList>().transform((file) => file[0])]),
        first_name: z.string(),
        first_name_kana: z.string(),
        last_name: z.string(),
        last_name_kana: z.string(),
        email: z.string().optional(),
        phone_number: z.string().optional(),
        birthday: z.string().optional(),
        hobby: z.string(),
        relationship: z.union([
          z.literal('世帯主'),
          z.literal('配偶者'),
          z.literal('子供'),
          z.literal('親'),
          z.literal('同居人'),
          z.literal(''),
        ]),
      })
    )
    .optional(),
});

export type FormValues = z.infer<typeof schema>;

const update = (values: FormValues) => {
  // console.log(values);
};

const EditProfile: FC = () => {
  return (
    <Form<FormValues, typeof schema>
      onSubmit={update}
      options={{ defaultValues: initialState }}
      schema={schema}
      className={styles.profile}
      name="members"
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
              registration={register('zip_code')}
              iconType="zipCode"
              src="/icon/zip-code-icon.svg"
              alt="zip-code-icon"
              placeholder="郵便番号"
              errorMesseage={formState.errors.first_name?.message}
            />
            <PrimaryInput
              type="text"
              registration={register('address')}
              iconType="address"
              src="/icon/address-icon.svg"
              alt="zip-code-icon"
              placeholder="住所"
              errorMesseage={formState.errors.first_name?.message}
            />
            <PrimaryInput
              type="text"
              registration={register('building')}
              iconType="address"
              src="/icon/address-icon.svg"
              alt="zip-code-icon"
              placeholder="建物"
              errorMesseage={formState.errors.first_name?.message}
            />
          </div>
          {fields.map((field, index) => {
            return (
              <PersonalInfo
                key={field.id}
                index={index}
                register={register}
                control={control}
                title="世帯員情報"
                setValue={setValue}
                isIcon={true}
                formState={formState}
                remove={remove}
              />
            );
          })}
          <div
            className={styles.profile__add}
            onClick={() =>
              append({
                file: '',
                first_name: '',
                last_name: '',
                first_name_kana: '',
                last_name_kana: '',
                email: undefined,
                phone_number: undefined,
                hobby: undefined,
                birthday: undefined,
                relationship: undefined,
              })
            }
          >
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
