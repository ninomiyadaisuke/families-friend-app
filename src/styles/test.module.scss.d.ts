export type Styles = {
  test__email: string;
  test__pass: string;
  test__user: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
