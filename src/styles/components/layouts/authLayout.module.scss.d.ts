export type Styles = {
  aside: string;
  children: string;
  container: string;
  title: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
