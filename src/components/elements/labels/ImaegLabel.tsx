import { FC } from 'react';

import styles from '@/styles/components/elements/labels/imageLabel.module.scss';

const ImaegLabel: FC = () => {
  return (
    <label htmlFor="fileUpload" className={styles.label}>
      <span>顔写真:</span> <span>(対応形式</span> <span>JPG/JPEG/</span> <span>PNG)</span>
    </label>
  );
};

export default ImaegLabel;
