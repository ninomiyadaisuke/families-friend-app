export type Styles = {
  card: string;
  card__icon: string;
  card__image: string;
  card__profile: string;
  card__text: string;
  card__texts: string;
  card__title: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
