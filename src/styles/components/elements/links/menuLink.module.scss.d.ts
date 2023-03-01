export type Styles = {
  link: string;
  link__active: string;
  linkButton: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
