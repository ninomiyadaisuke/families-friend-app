import { FieldError, FieldName, FieldValues, FormState, UseFieldArrayRemove } from 'react-hook-form';

import { useDeleteProfile } from '@/features/profile/apis/deleteProfile';
import { addressFields, nameFields, otherFields } from '@/libs/data/formFields';
import { queryClient } from '@/libs/reactQuery';

type UsePersonalInfoFormProps = {
  key?: 'myProfile';
  index?: number;
  remove?: UseFieldArrayRemove;
  id?: string;
};

type FieldErrorResult = FieldError | undefined;

export const usePersonalInfoForm = <T extends FieldValues>({ index, remove, id, key }: UsePersonalInfoFormProps) => {
  const chashedProfile = queryClient.getQueryData([key]) as T;
  const familyId = chashedProfile?.family_id;
  const deleteProfile = useDeleteProfile();
  const isIndex = index !== undefined && index >= 0;

  const formNameFields = nameFields<T>();
  const formOtherFields = otherFields<T>();
  const formAddresFields = addressFields<T>();

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

  return {
    getErrorMessage,
    getRegistrationPath,
    handleDelete,
    nameFields,
    otherFields,
    isIndex,
    formNameFields,
    formOtherFields,
    formAddresFields,
  };
};
