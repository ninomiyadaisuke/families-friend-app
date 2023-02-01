export type Styles = {
  select: string;
  selectYear: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
