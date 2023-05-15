export type Styles = {
  images__circle: string;
  images__circleFamilyHead: string;
  images__circleUser: string;
  images__rectangle: string;
  images__squarePrimary: string;
  images__thumbnail: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
