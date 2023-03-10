export type Styles = {
  aside: string;
  container: string;
  container__login: string;
  title: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
