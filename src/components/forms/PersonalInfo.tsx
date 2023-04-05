import { Control, FormState, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { ImageUploader, PrimaryInput, PrimarySelect, UnderlineDateSelect } from '@/components/forms';
import { FormValues } from '@/schema/personalInfoSchema';
import styles from '@/styles/components/forms/personalInfo.module.scss';

import { LabelLayout } from '../layouts';

type Props = {
  register: UseFormRegister<FormValues>;
  title: string;
  control: Control<FormValues, any>;
  setValue: UseFormSetValue<FormValues>;
  formState: FormState<FormValues>;
};

const options = [{ value: '世帯主' }, { value: '配偶書' }, { value: '子供' }, { value: '親' }, { value: '同居人' }];

const PersonalInfo = (props: Props) => {
  const { title, control, setValue, register, formState } = props;
  return (
    <div className={styles.forms}>
      <div className={styles.forms__container}>
        <h3 className={styles.forms__title}>{title}</h3>
        <div className={styles.forms__name}>
          <PrimaryInput
            registration={register('last_name')}
            type="text"
            placeholder="苗字"
            required={'required'}
            iconType="user"
            src="/icon/user-icon.svg"
            alt="user-icon"
            errorMesseage={formState.errors.last_name?.message}
          />
          <PrimaryInput
            registration={register('first_name')}
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
            registration={register('last_name_kana')}
            type="text"
            placeholder="ミョウジ"
            required={'required'}
            iconType="user"
            src="/icon/user-icon.svg"
            alt="user-icon"
            errorMesseage={formState.errors.last_name_kana?.message}
          />
          <PrimaryInput
            registration={register('first_name_kana')}
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
          registration={register('email')}
          type="email"
          placeholder="メールアドレス"
          iconType="email"
          src="/icon/email-icon.svg"
          alt="メールアイコン"
          errorMesseage={formState.errors.email?.message}
        />

        <PrimaryInput
          registration={register('phone_number')}
          type="text"
          placeholder="電話番号"
          iconType="phone"
          src="/icon/mobile-icon.svg"
          alt="メールアイコン"
          errorMesseage={formState.errors.phone_number?.message}
        />
        <PrimaryInput
          registration={register('hobby')}
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
              registration={register('birthday')}
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
              registration={register('relationship')}
              isSubmitSuccessful={formState.isSubmitSuccessful}
            />
          )}
        />
      </div>
      <div className={styles.forms__uploader}>
        <ImageUploader setValue={(value) => setValue('file', value)} registration={register('file')} />
      </div>
    </div>
  );
};

export default PersonalInfo;
