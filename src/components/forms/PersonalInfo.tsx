import { Control, FormState, UseFieldArrayRemove, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { FixedImage } from '@/components/elements/images';
import { ImageUploader, PrimaryInput, PrimarySelect, UnderlineDateSelect } from '@/components/forms';
import { LabelLayout } from '@/components/layouts';
import { useDeleteProfile } from '@/features/profile/apis/deleteProfile';
import { EditProfile } from '@/features/profile/schema';
import { options } from '@/libs/data';
import { getErrorMessage } from '@/libs/helper';
import { queryClient } from '@/libs/reactQuery';
import styles from '@/styles/components/forms/personalInfo.module.scss';

type Props = {
  register: UseFormRegister<EditProfile>;
  title: string;
  control: Control<EditProfile, any>;
  setValue: UseFormSetValue<EditProfile>;
  formState: FormState<EditProfile>;
  index?: number;
  isIcon?: boolean;
  remove?: UseFieldArrayRemove;
  required?: 'required';
  defaultValue?: string;
  defaultDate?: string;
  id?: string;
};

type TRelationship = '世帯主' | '配偶者' | '子供' | '親' | '同居人';

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

  const getRegistrationPath = (isIndex: boolean, index?: number, fieldName?: string) => {
    if (isIndex && index !== undefined && fieldName) {
      return `members.${index}.${fieldName}`;
    }
    return fieldName;
  };

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
            registration={isIndex ? register(`members.${index}.last_name`) : register('last_name')}
            type="text"
            placeholder="苗字"
            required={required}
            iconType="user"
            src="/icon/user-icon.svg"
            alt="user-icon"
            errorMesseage={getErrorMessage(formState.errors, { member: 'last_name' }, index)}
          />
          <PrimaryInput
            registration={isIndex ? register(`members.${index}.first_name`) : register('first_name')}
            // registration={register(getRegistrationPath(isIndex, index, 'first_name'))}
            type="text"
            placeholder="名前"
            required={required}
            iconType="user"
            src="/icon/user-icon.svg"
            alt="user-icon"
            responsiveImageNone="none"
            errorMesseage={getErrorMessage(formState.errors, { member: 'first_name' }, index)}
          />
        </div>
        <div className={styles.forms__name}>
          <PrimaryInput
            registration={isIndex ? register(`members.${index}.last_name_kana`) : register('last_name_kana')}
            type="text"
            placeholder="ミョウジ"
            required={required}
            iconType="user"
            src="/icon/user-icon.svg"
            alt="user-icon"
            errorMesseage={getErrorMessage(formState.errors, { member: 'last_name_kana' }, index)}
          />
          <PrimaryInput
            registration={isIndex ? register(`members.${index}.first_name_kana`) : register('first_name_kana')}
            type="text"
            placeholder="ナマエ"
            required={required}
            iconType="user"
            responsiveImageNone="none"
            src="/icon/user-icon.svg"
            alt="user-icon"
            errorMesseage={getErrorMessage(formState.errors, { member: 'first_name_kana' }, index)}
          />
        </div>
        <PrimaryInput
          registration={isIndex ? register(`members.${index}.email`) : register('email')}
          type="email"
          placeholder="メールアドレス"
          iconType="email"
          src="/icon/email-icon.svg"
          alt="メールアイコン"
          errorMesseage={getErrorMessage(formState.errors, { member: 'email' })}
        />

        <PrimaryInput
          registration={isIndex ? register(`members.${index}.phone_number`) : register('phone_number')}
          type="text"
          placeholder="電話番号"
          iconType="phone"
          src="/icon/mobile-icon.svg"
          alt="メールアイコン"
          errorMesseage={getErrorMessage(formState.errors, { member: 'phone_number' }, index)}
        />
        <PrimaryInput
          registration={isIndex ? register(`members.${index}.hobby`) : register('hobby')}
          type="text"
          placeholder="趣味"
          iconType="hobby"
          src="/icon/hobby-icon.svg"
          alt="メールアイコン"
          errorMesseage={getErrorMessage(formState.errors, { member: 'hobby' }, index)}
        />

        <LabelLayout
          label="生年月日"
          type="flex"
          flexKeep={true}
          children={() => (
            <UnderlineDateSelect
              control={control}
              setValue={(value) => setValue(isIndex ? `members.${index}.birthday` : 'birthday', value)}
              registration={isIndex ? register(`members.${index}.birthday`) : register('birthday')}
              defaultDate={defaultDate}
              errorMesseage={getErrorMessage(formState.errors, { member: 'members' }, index)}
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
              registration={isIndex ? register(`members.${index}.relationship`) : register('relationship')}
              setValue={(value) =>
                setValue(isIndex ? `members.${index}.relationship` : 'relationship', value as TRelationship)
              }
              defaultValue={defaultValue}
              isSubmitSuccessful={formState.isSubmitSuccessful}
            />
          )}
        />
      </div>
      <div className={styles.forms__uploader}>
        <ImageUploader
          setValue={(value) => setValue(isIndex ? `members.${index}.file` : 'file', value)}
          registration={isIndex ? register(`members.${index}.file`) : register('file')}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
