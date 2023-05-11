import { useRouter } from 'next/router';
import { FC } from 'react';

import { AddButton, PrimaryButton } from '@/components/elements/buttons';
import { Form, PersonalInfo, PrimaryInput } from '@/components/forms';
import { useUpdateProfile } from '@/features/profile/apis/editProfile';
import { usePersonalInfoForm } from '@/hooks/usePersonalInfoForm';
import { appendFields } from '@/libs/data/formFields';
import styles from '@/styles/features/profile/components/editProfile.module.scss';

import { useGetProfile } from '../apis/getProfile';
import { EditProfile, editProfileSchema } from '../schema';

const EditProfile: FC = () => {
  const { formAddresFields, getErrorMessage } = usePersonalInfoForm({});
  const profilMutation = useUpdateProfile();
  const { data: profile, isLoading } = useGetProfile();
  const router = useRouter();
  const isQuery = router.query.isQuery === 'isQuery';
  if (isLoading) return <></>;

  return (
    <Form<EditProfile, typeof editProfileSchema>
      onSubmit={async (values) => await profilMutation.mutateAsync(values)}
      options={{ defaultValues: profile }}
      schema={editProfileSchema}
      className={styles.profile}
      name="members"
      isQuery={isQuery}
    >
      {({ register, setValue, control, formState }, { fields, append, remove }) => (
        <>
          <PersonalInfo
            formMethods={{ register, control, setValue, formState }}
            title="ユーザー情報"
            defaultValues={{
              defaultDate: profile?.birthday,
              defaultRelationship: profile?.relationship,
              defaultImage: profile?.image?.path,
            }}
          />
          <div className={styles.profile__address}>
            <h3>現住所</h3>
            {formAddresFields.map((field) => (
              <PrimaryInput
                key={field.name}
                type="text"
                registration={register(field.name)}
                iconType={field.iconType}
                src={field.src}
                alt={field.alt}
                placeholder={field.placeholder}
                errorMesseage={getErrorMessage(formState.errors, field.name)}
              />
            ))}
          </div>
          {fields.map((field, index) => {
            const memberRelationship = profile?.members[index]?.relationship;
            const memberBirthday = profile?.members[index]?.birthday;
            const memberImage = profile?.members[index]?.image;
            return (
              <PersonalInfo
                key={field.id}
                formMethods={{ register, control, setValue, formState, remove }}
                defaultValues={{
                  defaultDate: memberBirthday && memberBirthday,
                  defaultRelationship: memberRelationship && memberRelationship,
                  defaultImage: memberImage && memberImage.path,
                }}
                required="required"
                id={profile?.members[index] && profile?.members[index].id}
                index={index}
                title="世帯員情報"
                isIcon={true}
              />
            );
          })}
          <div className={styles.profile__add} onClick={() => append(appendFields)}>
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
