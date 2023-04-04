import { Control, FormState, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { ImageUploader, PrimaryInput, PrimarySelect, UnderlineDateSelect } from '@/components/forms';
import { FormValues } from '@/schema/personalInfoSchema';

import { LabelLayout } from '../layouts';

type Props = {
  register: UseFormRegister<FormValues>;
  title: string;
  required?: 'required';
  control: Control<FormValues, any>;
  setValue: UseFormSetValue<FormValues>;
  formState: FormState<FormValues>;
};

const options = [{ value: '世帯主' }, { value: '配偶書' }, { value: '子供' }, { value: '親' }, { value: '同居人' }];

const PersonalInfo = (props: Props) => {
  const { title, required, control, setValue, register, formState } = props;
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <div>
          <PrimaryInput
            registration={register('last_name')}
            type="text"
            placeholder="苗字"
            required={'required'}
            iconType="user"
            src="/icon/user-icon.svg"
            alt="user-icon"
          />
          <PrimaryInput
            registration={register('last_name_kana')}
            type="text"
            placeholder="ミョウジ"
            required={'required'}
            iconType="user"
            src="/icon/user-icon.svg"
            alt="user-icon"
            responsiveImageNone="none"
          />
          <PrimaryInput
            registration={register('first_name')}
            type="text"
            placeholder="名前"
            required={'required'}
            iconType="user"
            src="/icon/user-icon.svg"
            alt="user-icon"
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
          />
        </div>
        <PrimaryInput
          registration={register('email')}
          type="email"
          placeholder="メールアドレス"
          iconType="email"
          src="/icon/email-icon.svg"
          alt="メールアイコン"
        />

        <PrimaryInput
          registration={register('phone_number')}
          type="text"
          placeholder="電話番号"
          iconType="phone"
          src="/icon/mobile-icon.svg"
          alt="メールアイコン"
        />
        <PrimaryInput
          registration={register('hobby')}
          type="text"
          placeholder="趣味"
          iconType="hobby"
          src="/icon/hobby-icon.svg"
          alt="メールアイコン"
        />
      </div>
      <LabelLayout
        label="生年月日"
        type="flex"
        flexKeep={true}
        children={() => (
          <UnderlineDateSelect
            control={control}
            setValue={(value) => setValue('birthday', value)}
            registration={register('birthday')}
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
      <ImageUploader setValue={(value) => setValue('file', value)} registration={register('file')} />
    </div>
  );
};

export default PersonalInfo;
