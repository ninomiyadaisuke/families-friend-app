export type Styles = {
  forms: string;
  forms__container: string;
  forms__name: string;
  forms__title: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
