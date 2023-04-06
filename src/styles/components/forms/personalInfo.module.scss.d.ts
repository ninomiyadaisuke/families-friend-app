export type Styles = {
  forms: string;
  forms__container: string;
  forms__icon: string;
  forms__name: string;
  forms__title: string;
  forms__uploader: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
