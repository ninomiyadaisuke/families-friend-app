import { ReactElement } from 'react';

export const nestLayout =
  (parent: (page: ReactElement) => JSX.Element, child: (page: ReactElement) => JSX.Element) => (page: ReactElement) =>
    parent(child(page));
