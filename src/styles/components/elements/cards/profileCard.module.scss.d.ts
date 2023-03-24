export type Styles = {
  card: string;
  card__buttons: string;
  card__buttons_button: string;
  card__container: string;
  card__header: string;
  card__icon: string;
  card__image: string;
  card__nameRelationship: string;
  card__nameRelationship_name: string;
  card__profile: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
