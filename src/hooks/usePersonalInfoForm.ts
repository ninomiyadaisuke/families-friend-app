import { HTMLInputTypeAttribute } from 'react';
import { FieldError, FieldValues, FormState, UseFieldArrayRemove } from 'react-hook-form';

import { useDeleteProfile } from '@/features/profile/apis/deleteProfile';
import { queryClient } from '@/libs/reactQuery';

type UsePersonalInfoFormProps = {
  key: 'myProfile';
  index?: number;
  remove?: UseFieldArrayRemove;
  id?: string;
};

type FormNameField<T extends FieldValues> = {
  name: FieldName<T>;
  placeholder: string;
};

type FormOtherField<T extends FieldValues> = {
  name: FieldName<T>;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  iconType: string;
  src: string;
  alt: string;
};

export type FieldName<U extends FieldValues> = keyof U | keyof U['members'][number];

type FieldErrorResult = FieldError | undefined;

export const usePersonalInfoForm = <T extends FieldValues>({ index, remove, id, key }: UsePersonalInfoFormProps) => {
  const chashedProfile = queryClient.getQueryData([key]) as T;
  const familyId = chashedProfile.family_id;
  const deleteProfile = useDeleteProfile();
  const isIndex = index !== undefined && index >= 0;

  const nameFields = [
    { name: 'last_name', placeholder: '苗字' },
    { name: 'first_name', placeholder: '名前' },
    { name: 'last_name_kana', placeholder: 'ミョウジ' },
    { name: 'first_name_kana', placeholder: 'ナマエ' },
  ] as const satisfies readonly FormNameField<T>[];

  const otherFields = [
    {
      type: 'email',
      name: 'email',
      placeholder: 'メールアドレス',
      iconType: 'email',
      src: '/icon/email-icon.svg',
      alt: 'email-icon',
    },
    {
      type: 'text',
      name: 'phone_number',
      placeholder: '電話番号',
      iconType: 'phone',
      src: '/icon/mobile-icon.svg',
      alt: 'mobile-icon',
    },
    {
      type: 'text',
      name: 'hobby',
      placeholder: '趣味',
      iconType: 'hobby',
      src: '/icon/hobby-icon.svg',
      alt: 'hobby-icon',
    },
  ] as const satisfies readonly FormOtherField<T>[];

  const getFieldError = <U extends FieldValues>(
    errors: FormState<U>['errors'],
    fieldName: FieldName<U>,
    index?: number
  ): FieldErrorResult => {
    if (index !== undefined && Array.isArray(errors.members)) {
      return errors.members[index]?.[fieldName] as FieldErrorResult;
    }
    return (errors as Record<string, FieldErrorResult>)[fieldName];
  };

  const getErrorMessage = <U extends FieldValues>(
    errors: FormState<U>['errors'],
    fieldName: FieldName<U>,
    index?: number
  ): string | undefined => {
    const fieldErrors = getFieldError<U>(errors, fieldName, index);
    return fieldErrors?.message;
  };

  const getRegistrationPath = <U extends FieldValues, T extends FieldName<U>>(
    isIndex: boolean,
    fieldName: T,
    index?: number
  ): T => {
    if (isIndex && index !== undefined && fieldName) {
      return `members.${index}.${String(fieldName)}` as T;
    }
    return fieldName as T;
  };

  const handleDelete = () => {
    if (id && remove && index !== undefined) {
      const res = confirm('本当に削除しますか？');
      if (res) {
        deleteProfile.mutate([id, familyId]);
        remove(index);
      } else {
        return;
      }
    }
    remove && index !== undefined && remove(index);
  };

  return { getErrorMessage, getRegistrationPath, handleDelete, nameFields, otherFields, isIndex };
};
