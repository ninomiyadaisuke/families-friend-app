export type Styles = {
  bgBlue: string;
  bgWhite: string;
  container: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
