export type Styles = {
  icons__currentPosition: string;
  icons__email: string;
  icons__error: string;
  icons__note: string;
  icons__password: string;
  icons__pencil: string;
  icons__pencilSquare: string;
  icons__phone: string;
  icons__trash: string;
  icons__user: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
