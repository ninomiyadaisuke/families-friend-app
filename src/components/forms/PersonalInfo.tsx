import { Control, FormState, UseFieldArrayRemove, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { ImageUploader, PrimaryInput, PrimarySelect, UnderlineDateSelect } from '@/components/forms';
import { FormValues } from '@/features/profile/components/EditProfile';
import styles from '@/styles/components/forms/personalInfo.module.scss';

import { FixedImage } from '../elements/images';
import { LabelLayout } from '../layouts';

type Props = {
  register: UseFormRegister<FormValues>;
  title: string;
  control: Control<FormValues, any>;
  setValue: UseFormSetValue<FormValues>;
  formState: FormState<FormValues>;
  index?: number;
  isIcon?: boolean;
  remove?: UseFieldArrayRemove;
};

const options = [{ value: '世帯主' }, { value: '配偶書' }, { value: '子供' }, { value: '親' }, { value: '同居人' }];

const PersonalInfo = (props: Props) => {
  const { title, control, setValue, register, formState, index, isIcon, remove } = props;
  const isIndex = index !== undefined && index >= 0;
  return (
    <div className={styles.forms}>
      <div className={styles.forms__container}>
        <div className={styles.forms__title}>
          <h3>{title}</h3>
          {isIcon && remove && (
            <div onClick={() => remove(index)}>
              <FixedImage src="/icon/material-delete.svg" alt="delete-icon" className={styles.forms__icon} />
            </div>
          )}
        </div>
        <div className={styles.forms__name}>
          <PrimaryInput
            registration={isIndex ? register(`members.${index}.last_name`) : register('last_name')}
            type="text"
            placeholder="苗字"
            required={'required'}
            iconType="user"
            src="/icon/user-icon.svg"
            alt="user-icon"
            errorMesseage={formState.errors.last_name?.message}
          />
          <PrimaryInput
            registration={isIndex ? register(`members.${index}.first_name`) : register('first_name')}
            type="text"
            placeholder="名前"
            required={'required'}
            iconType="user"
            src="/icon/user-icon.svg"
            alt="user-icon"
            responsiveImageNone="none"
          />
        </div>
        <div className={styles.forms__name}>
          <PrimaryInput
            registration={isIndex ? register(`members.${index}.last_name_kana`) : register('last_name_kana')}
            type="text"
            placeholder="ミョウジ"
            required={'required'}
            iconType="user"
            src="/icon/user-icon.svg"
            alt="user-icon"
            errorMesseage={formState.errors.last_name_kana?.message}
          />
          <PrimaryInput
            registration={isIndex ? register(`members.${index}.first_name_kana`) : register('first_name_kana')}
            type="text"
            placeholder="ナマエ"
            required={'required'}
            iconType="user"
            responsiveImageNone="none"
            src="/icon/user-icon.svg"
            alt="user-icon"
            errorMesseage={formState.errors.first_name_kana?.message}
          />
        </div>
        <PrimaryInput
          registration={isIndex ? register(`members.${index}.email`) : register('email')}
          type="email"
          placeholder="メールアドレス"
          iconType="email"
          src="/icon/email-icon.svg"
          alt="メールアイコン"
          errorMesseage={formState.errors.email?.message}
        />

        <PrimaryInput
          registration={isIndex ? register(`members.${index}.phone_number`) : register('phone_number')}
          type="text"
          placeholder="電話番号"
          iconType="phone"
          src="/icon/mobile-icon.svg"
          alt="メールアイコン"
          errorMesseage={formState.errors.phone_number?.message}
        />
        <PrimaryInput
          registration={isIndex ? register(`members.${index}.hobby`) : register('hobby')}
          type="text"
          placeholder="趣味"
          iconType="hobby"
          src="/icon/hobby-icon.svg"
          alt="メールアイコン"
          errorMesseage={formState.errors.hobby?.message}
        />

        <LabelLayout
          label="生年月日"
          type="flex"
          flexKeep={true}
          children={() => (
            <UnderlineDateSelect
              control={control}
              setValue={(value) => setValue('birthday', value)}
              registration={isIndex ? register(`members.${index}.birthday`) : register('birthday')}
              errorMesseage={formState.errors.birthday?.message}
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
              registration={isIndex ? register(`members.${index}.relationship`) : register('relationship')}
              isSubmitSuccessful={formState.isSubmitSuccessful}
            />
          )}
        />
      </div>
      <div className={styles.forms__uploader}>
        <ImageUploader
          setValue={(value) => setValue('file', value)}
          registration={isIndex ? register(`members.${index}.file`) : register('file')}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
