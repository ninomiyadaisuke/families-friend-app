export type Styles = {
  rotation: string;
  spinner: string;
  spinner__red: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
