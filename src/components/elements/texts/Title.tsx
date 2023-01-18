import HTMLReactParser from 'html-react-parser';
import { ElementType,FC } from 'react';

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  title: string;
  className?: string;
};

const Title: FC<Props> = (props) => {
  const { level, title, className } = props;
  const Heading = `h${level}` as ElementType;
  return <Heading className={className}>{HTMLReactParser(title)}</Heading>;
};

export default Title;
