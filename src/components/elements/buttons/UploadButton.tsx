import { FC, useRef } from 'react';

import styles from '@/styles/components/elements/buttons/uploadButton.module.scss';

type Props = {
  onChange?: () => void;
};

const UploadButton: FC<Props> = (props) => {
  const { onChange } = props;
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => fileInputRef.current?.click()}>ファイルを選択</button>
      <input type="file" onChange={onChange} ref={fileInputRef} style={{ display: 'none' }} />
    </div>
  );
};

export default UploadButton;
