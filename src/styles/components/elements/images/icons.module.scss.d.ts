export type Styles = {
  icons__pencil: string;
  icons__pencilSquare: string;
  icons__trash: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
