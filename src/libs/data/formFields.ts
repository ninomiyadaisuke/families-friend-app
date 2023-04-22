import { HTMLInputTypeAttribute } from 'react';
import { FieldValues } from 'react-hook-form';

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

type FormAdressField<T extends FieldValues> = Omit<FormOtherField<T>, 'type'>;

export type FieldName<U extends FieldValues> = keyof U | keyof U['members'][number];

export const nameFields = <T extends FieldValues>() =>
  [
    { name: 'last_name', placeholder: '苗字' },
    { name: 'first_name', placeholder: '名前' },
    { name: 'last_name_kana', placeholder: 'ミョウジ' },
    { name: 'first_name_kana', placeholder: 'ナマエ' },
  ] as const satisfies readonly FormNameField<T>[];

export const otherFields = <T extends FieldValues>() =>
  [
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

export const addressFields = <T extends FieldValues>() =>
  [
    {
      name: 'zip_code',
      placeholder: '郵便番号',
      iconType: 'zipCode',
      src: '/icon/zip-code-icon.svg',
      alt: 'zip-code-icon',
    },
    {
      name: 'address',
      placeholder: '住所',
      iconType: 'address',
      src: '/icon/address-icon.svg',
      alt: 'zip-code-icon',
    },
    {
      name: 'building',
      placeholder: '建物',
      iconType: 'hobby',
      src: '/icon/address-icon.svg',
      alt: 'zip-code-icon',
    },
  ] as const satisfies readonly FormAdressField<T>[];

export const appendFields = {
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
};
