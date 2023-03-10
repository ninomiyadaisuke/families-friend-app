export type Styles = {
  forms: string;
  forms__button: string;
  forms__check: string;
  forms__container: string;
  forms__name: string;
  forms__pass: string;
  forms__select: string;
  forms__terms: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
