export type Styles = {
  card: string;
  card__container: string;
  card__families: string;
  card__present: string;
  card__presentList: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
