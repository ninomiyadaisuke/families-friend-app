export type Styles = {
  input: string;
  input__label: string;
  inputLabelDisabled: string;
  radioContainer: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
