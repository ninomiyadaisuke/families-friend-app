export type Styles = {
  selected: string;
  selected__container: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
