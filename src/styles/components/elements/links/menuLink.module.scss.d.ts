export type Styles = {
  link: string;
  link__active: string;
  link__active__dropdawn: string;
  link__dropdawn: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
