import cx from 'classnames';
import { FC } from 'react';

import styles from '@/styles/components/elements/labels/imageLabel.module.scss';

type Props = {
  title: string;
  block?: boolean;
};

const ImaegLabel: FC<Props> = (props) => {
  const { title, block } = props;
  return (
    <label htmlFor="fileUpload" className={cx(styles.label, { [styles.label__block]: block })}>
      <span>{title}:</span> <span>(対応形式</span> <span>JPG/JPEG/</span> <span>PNG)</span>
    </label>
  );
};

export default ImaegLabel;
