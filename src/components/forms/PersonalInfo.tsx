import { Control, FieldPath, FieldValues, FormState, UseFieldArrayRemove, UseFormRegister } from 'react-hook-form';

import { FixedImage } from '@/components/elements/images';
import { ImageUploader, PrimaryInput, PrimarySelect, UnderlineDateSelect } from '@/components/forms';
import { LabelLayout } from '@/components/layouts';
import { EditProfile } from '@/features/profile/schema';
import { usePersonalInfoForm } from '@/hooks/usePersonalInfoForm';
import { options } from '@/libs/data';
import styles from '@/styles/components/forms/personalInfo.module.scss';

type SetValue<T extends FieldValues> = (
  name: FieldPath<T>,
  value: T[keyof T] | T['members'][number][keyof T['members'][number]] | undefined
) => void;

type Props = {
  formMethods: {
    register: UseFormRegister<EditProfile>;
    control: Control<EditProfile, any>;
    setValue: SetValue<EditProfile>;
    formState: FormState<EditProfile>;
    remove?: UseFieldArrayRemove;
  };
  title: string;
  index?: number;
  isIcon?: boolean;
  required?: 'required';
  id?: string;
  defaultValues: {
    defaultRelationship?: string;
    defaultDate?: string;
  };
};

const PersonalInfo = (props: Props) => {
  const { title, index, isIcon, required, defaultValues, id, formMethods } = props;
  const { register, control, formState, setValue, remove } = formMethods;
  const { defaultRelationship, defaultDate } = defaultValues;
  const { getErrorMessage, getRegistrationPath, handleDelete, isIndex, formNameFields, formOtherFields } =
    usePersonalInfoForm<EditProfile>({
      index,
      remove,
      id,
      key: 'myProfile',
    });

  return (
    <div className={styles.forms}>
      <div className={styles.forms__container}>
        <div className={styles.forms__title}>
          <h3>{title}</h3>
          {isIcon && remove && (
            <div onClick={() => handleDelete()}>
              <FixedImage src="/icon/material-delete.svg" alt="delete-icon" className={styles.forms__icon} />
            </div>
          )}
        </div>
        <div className={styles.forms__name}>
          {formNameFields.slice(0, 2).map((field) => (
            <PrimaryInput
              key={field.name}
              registration={register(getRegistrationPath(isIndex, field.name, index))}
              type="text"
              placeholder={field.placeholder}
              required={required}
              iconType="user"
              src="/icon/user-icon.svg"
              alt="user-icon"
              errorMesseage={getErrorMessage(formState.errors, field.name, index)}
            />
          ))}
        </div>
        <div className={styles.forms__name}>
          {formNameFields.slice(2).map((field) => (
            <PrimaryInput
              key={field.name}
              registration={register(getRegistrationPath(isIndex, field.name, index))}
              type="text"
              placeholder={field.placeholder}
              required={required}
              iconType="user"
              src="/icon/user-icon.svg"
              alt="user-icon"
              errorMesseage={getErrorMessage(formState.errors, 'last_name_kana', index)}
            />
          ))}
        </div>

        {formOtherFields.map((field) => (
          <PrimaryInput
            key={field.name}
            registration={register(getRegistrationPath(isIndex, field.name, index))}
            type={field.type}
            placeholder={field.placeholder}
            iconType={field.iconType}
            src={field.src}
            alt={field.alt}
            errorMesseage={getErrorMessage(formState.errors, field.name, index)}
          />
        ))}

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
              defaultRelationship={defaultRelationship}
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
