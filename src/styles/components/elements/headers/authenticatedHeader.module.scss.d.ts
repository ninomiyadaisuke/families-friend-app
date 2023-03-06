export type Styles = {
  header: string;
  header__container: string;
  header__container__hamburger: string;
  header__container__menu: string;
  header__container_profile: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
