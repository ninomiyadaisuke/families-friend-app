export type Styles = {
  label: string;
  label__block: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
