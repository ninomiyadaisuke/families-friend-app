export type Styles = {
  inputContainer: string;
  inputContainer_block: string;
  inputContainer_flex: string;
  labelContainer: string;
  labelContainer__badge: string;
  labelContainer__label: string;
  labelContainer__label_center: string;
  labelContainer__label_start: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
