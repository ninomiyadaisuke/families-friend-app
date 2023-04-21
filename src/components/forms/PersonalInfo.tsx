import { Control, FieldPath, FieldValues, FormState, UseFieldArrayRemove, UseFormRegister } from 'react-hook-form';

import { FixedImage } from '@/components/elements/images';
import { ImageUploader, PrimaryInput, PrimarySelect, UnderlineDateSelect } from '@/components/forms';
import { LabelLayout } from '@/components/layouts';
import { useDeleteProfile } from '@/features/profile/apis/deleteProfile';
import { EditProfile } from '@/features/profile/schema';
import { options } from '@/libs/data';
import { getErrorMessage, getRegistrationPath } from '@/libs/helper';
import { queryClient } from '@/libs/reactQuery';
import styles from '@/styles/components/forms/personalInfo.module.scss';

type SetValue<T extends FieldValues> = (
  name: FieldPath<T>,
  value: T[keyof T] | T['members'][number][keyof T['members'][number]] | undefined
) => void;

type Props = {
  register: UseFormRegister<EditProfile>;
  title: string;
  control: Control<EditProfile, any>;
  setValue: SetValue<EditProfile>;
  formState: FormState<EditProfile>;
  index?: number;
  isIcon?: boolean;
  remove?: UseFieldArrayRemove;
  required?: 'required';
  defaultValue?: string;
  defaultDate?: string;
  id?: string;
};

const PersonalInfo = (props: Props) => {
  const {
    title,
    control,
    setValue,
    register,
    formState,
    index,
    isIcon,
    remove,
    required,
    defaultValue,
    defaultDate,
    id,
  } = props;
  const chashedProfile = queryClient.getQueryData(['myProfile']) as any;
  const familyId = chashedProfile.family_id;
  const deleteProfile = useDeleteProfile();
  const isIndex = index !== undefined && index >= 0;

  return (
    <div className={styles.forms}>
      <div className={styles.forms__container}>
        <div className={styles.forms__title}>
          <h3>{title}</h3>
          {isIcon && remove && (
            <div
              onClick={() => {
                if (id) {
                  const res = confirm('本当に削除しますか？');
                  if (res) {
                    deleteProfile.mutate([id, familyId]);
                    remove(index);
                  } else {
                    return;
                  }
                }
                remove(index);
              }}
            >
              <FixedImage src="/icon/material-delete.svg" alt="delete-icon" className={styles.forms__icon} />
            </div>
          )}
        </div>
        <div className={styles.forms__name}>
          <PrimaryInput
            registration={register(getRegistrationPath(isIndex, 'last_name', index))}
            type="text"
            placeholder="苗字"
            required={required}
            iconType="user"
            src="/icon/user-icon.svg"
            alt="user-icon"
            errorMesseage={getErrorMessage(formState.errors, 'last_name', index)}
          />
          <PrimaryInput
            registration={register(getRegistrationPath(isIndex, 'first_name', index))}
            type="text"
            placeholder="名前"
            required={required}
            iconType="user"
            src="/icon/user-icon.svg"
            alt="user-icon"
            responsiveImageNone="none"
            errorMesseage={getErrorMessage(formState.errors, 'first_name', index)}
          />
        </div>
        <div className={styles.forms__name}>
          <PrimaryInput
            registration={register(getRegistrationPath(isIndex, 'last_name_kana', index))}
            type="text"
            placeholder="ミョウジ"
            required={required}
            iconType="user"
            src="/icon/user-icon.svg"
            alt="user-icon"
            errorMesseage={getErrorMessage(formState.errors, 'last_name_kana', index)}
          />
          <PrimaryInput
            registration={register(getRegistrationPath(isIndex, 'first_name_kana', index))}
            type="text"
            placeholder="ナマエ"
            required={required}
            iconType="user"
            responsiveImageNone="none"
            src="/icon/user-icon.svg"
            alt="user-icon"
            errorMesseage={getErrorMessage(formState.errors, 'first_name_kana', index)}
          />
        </div>
        <PrimaryInput
          registration={register(getRegistrationPath(isIndex, 'email', index))}
          type="email"
          placeholder="メールアドレス"
          iconType="email"
          src="/icon/email-icon.svg"
          alt="メールアイコン"
          errorMesseage={getErrorMessage(formState.errors, 'email', index)}
        />

        <PrimaryInput
          registration={register(getRegistrationPath(isIndex, 'phone_number', index))}
          type="text"
          placeholder="電話番号"
          iconType="phone"
          src="/icon/mobile-icon.svg"
          alt="メールアイコン"
          errorMesseage={getErrorMessage(formState.errors, 'phone_number', index)}
        />
        <PrimaryInput
          registration={register(getRegistrationPath(isIndex, 'hobby', index))}
          type="text"
          placeholder="趣味"
          iconType="hobby"
          src="/icon/hobby-icon.svg"
          alt="メールアイコン"
          errorMesseage={getErrorMessage(formState.errors, 'hobby', index)}
        />

        <LabelLayout
          label="生年月日"
          type="flex"
          flexKeep={true}
          children={() => (
            <UnderlineDateSelect
              control={control}
              setValue={(value) => setValue(getRegistrationPath(isIndex, 'birthday', index), value)}
              registration={register(getRegistrationPath(isIndex, 'birthday', index))}
              defaultDate={defaultDate}
              errorMesseage={getErrorMessage(formState.errors, 'members', index)}
            />
          )}
        />
        <LabelLayout
          label="役割"
          type="flex"
          children={(label) => (
            <PrimarySelect
              id={`${label}` + index}
              selectLabel="役割を選択"
              options={options}
              registration={register(getRegistrationPath(isIndex, 'relationship', index))}
              setValue={(value) => setValue(getRegistrationPath(isIndex, 'relationship', index), value)}
              defaultValue={defaultValue}
              isSubmitSuccessful={formState.isSubmitSuccessful}
            />
          )}
        />
      </div>
      <div className={styles.forms__uploader}>
        <ImageUploader
          setValue={(value) => setValue(getRegistrationPath(isIndex, 'file', index), value)}
          registration={register(getRegistrationPath(isIndex, 'file', index))}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
