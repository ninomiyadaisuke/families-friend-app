export type Styles = {
  thumbnailContainer: string;
  thumbnailContainer__image: string;
  thumbnailContainer__link: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
