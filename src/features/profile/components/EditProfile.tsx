import { useQueryClient } from '@tanstack/react-query';
import { FC } from 'react';

import { AddButton, PrimaryButton } from '@/components/elements/buttons';
import { Form, PersonalInfo, PrimaryInput } from '@/components/forms';
import { useUpdateProfile } from '@/features/profile/apis/editProfile';
import styles from '@/styles/features/profile/components/editProfile.module.scss';

import { useGetProfile } from '../apis/getProfile';
import { EditProfile, editProfileSchema } from '../schema';

const EditProfile: FC = () => {
  const qeuryClient = useQueryClient();
  const cachedData: EditProfile | undefined = qeuryClient.getQueryData(['myProfile']);
  const profilMutation = useUpdateProfile(cachedData);
  const { data: profile, isLoading } = useGetProfile();
  if (isLoading) return <></>;
  const memberRelationship = profile?.members.map((member) => member.relationship);
  const memberBirthday = profile?.members.map((member) => member.birthday);

  return (
    <Form<EditProfile, typeof editProfileSchema>
      onSubmit={async (values) => await profilMutation.mutateAsync(values)}
      options={{ defaultValues: profile }}
      schema={editProfileSchema}
      className={styles.profile}
      name="members"
    >
      {({ register, setValue, control, formState }, { fields, append, remove }) => (
        <>
          <PersonalInfo
            formMethods={{ register, control, setValue, formState }}
            title="ユーザー情報"
            defaultValue={profile?.relationship}
            defaultDate={profile?.birthday}
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
              errorMesseage={formState.errors.zip_code?.message}
            />
            <PrimaryInput
              type="text"
              registration={register('address')}
              iconType="address"
              src="/icon/address-icon.svg"
              alt="zip-code-icon"
              placeholder="住所"
              errorMesseage={formState.errors.address?.message}
            />
            <PrimaryInput
              type="text"
              registration={register('building')}
              iconType="address"
              src="/icon/address-icon.svg"
              alt="zip-code-icon"
              placeholder="建物"
              errorMesseage={formState.errors.building?.message}
            />
          </div>
          {fields.map((field, index) => {
            return (
              <PersonalInfo
                formMethods={{ register, control, setValue, formState }}
                required="required"
                key={field.id}
                id={profile?.members[index] && profile?.members[index].id}
                index={index}
                title="世帯員情報"
                isIcon={true}
                remove={remove}
                defaultDate={memberBirthday && memberBirthday[index]}
                defaultValue={memberRelationship && memberRelationship[index]}
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
                email: '',
                phone_number: '',
                hobby: '',
                birthday: '',
                relationship: '',
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
