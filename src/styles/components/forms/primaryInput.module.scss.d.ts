export type Styles = {
  input: string;
  input__icon: string;
  input__icon_address: string;
  input__icon_email: string;
  input__icon_hobby: string;
  input__icon_none: string;
  input__icon_password: string;
  input__icon_phone: string;
  input__icon_user: string;
  input__icon_zipCode: string;
  input__status: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
