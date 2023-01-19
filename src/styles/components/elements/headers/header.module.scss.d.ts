export type Styles = {
  header: string;
  header__logo: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
