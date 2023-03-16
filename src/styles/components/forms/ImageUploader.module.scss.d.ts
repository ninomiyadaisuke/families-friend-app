export type Styles = {
  buttonContainer: string;
  buttonContainer__input: string;
  buttonContainer__label: string;
  profileImage: string;
  uploaderContainer: string;
  uploaderContainer__imageAndButton: string;
  uploaderContainer__text: string;
  uploaderContainer__thumbnail: string;
  uploaderContainer_imagePostion: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
