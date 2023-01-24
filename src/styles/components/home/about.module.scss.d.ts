export type Styles = {
  about: string;
  about__container: string;
  about__image: string;
  about__image_phoneCircle: string;
  about__image_phoneShadow: string;
  about__image_presentAfterRibbon: string;
  about__image_presentBeforeRibbon: string;
  about__image_presentBottomOfTheLid: string;
  about__image_tag: string;
  about__image_verticalRibbon: string;
  about__textArea: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
