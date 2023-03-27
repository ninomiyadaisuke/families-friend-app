export type Styles = {
  blueButton: string;
  button: string;
  whiteButton: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
