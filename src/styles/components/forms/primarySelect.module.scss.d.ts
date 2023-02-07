export type Styles = {
  accordion: string;
  select: string;
  select__arrow: string;
  select__arrow_down: string;
  select__arrow_down_down: string;
  select__container: string;
  select__label: string;
  select__label_badge: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
