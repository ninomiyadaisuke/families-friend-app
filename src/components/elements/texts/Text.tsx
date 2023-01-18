import HTMLReactParser from 'html-react-parser';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const Text: FC<Props> = (props) => {
  const { children, className } = props;
  return <p className={className}>{HTMLReactParser(children)}</p>;
};

export default Text;
