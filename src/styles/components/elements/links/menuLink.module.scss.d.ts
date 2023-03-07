export type Styles = {
  link: string;
  link__active: string;
  link__active__atag: string;
  link__active__dropdawn: string;
  link__active__nextLink: string;
  link__atag: string;
  link__dropdawn: string;
  link__nextLink: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
