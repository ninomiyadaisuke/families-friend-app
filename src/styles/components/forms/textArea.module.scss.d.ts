export type Styles = {
  textContainer: string;
  textContainer__text: string;
  textContainer__text_error: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
