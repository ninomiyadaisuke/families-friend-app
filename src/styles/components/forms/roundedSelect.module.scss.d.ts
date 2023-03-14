export type Styles = {
  selectContainer: string;
  selectContainer__select: string;
  selectContainer_disabled: string;
  selectContainer_midule: string;
  selectContainer_short: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
