export type Styles = {
  input: string;
  input__icon: string;
  input__icon_none: string;
  input__icon_user: string;
  input_error: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
