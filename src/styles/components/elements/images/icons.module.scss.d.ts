export type Styles = {
  icons__address: string;
  icons__currentPosition: string;
  icons__email: string;
  icons__error: string;
  icons__facebook: string;
  icons__instagram: string;
  icons__note: string;
  icons__password: string;
  icons__pencil: string;
  icons__pencilSquare: string;
  icons__phone: string;
  icons__trash: string;
  icons__twitter: string;
  icons__user: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
