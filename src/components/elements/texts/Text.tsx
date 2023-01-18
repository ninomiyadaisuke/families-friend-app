import HTMLReactParser from 'html-react-parser';
import { FC, ReactNode } from 'react';

type Props = {
  text: string;
  className?: string;
};

const Text: FC<Props> = (props) => {
  const { className, text } = props;
  return <p className={className}>{HTMLReactParser(text)}</p>;
};

export default Text;
