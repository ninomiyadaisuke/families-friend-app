import { ChangeEvent, FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from '@/styles/components/elements/buttons/uploadButton.module.scss';

type Props = {
  registration: UseFormRegisterReturn;
  fileChangedHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const UploadButton: FC<Props> = (props) => {
  const { registration, fileChangedHandler } = props;
  const { onChange, ...rest } = registration;

  return (
    <div className={styles.buttonContainer}>
      <label htmlFor="fileUpload" className={styles.buttonContainer__label}>
        ファイルを選択する
      </label>
      <input
        type="file"
        accept=".jpeg,.png,.jpg"
        onChange={fileChangedHandler}
        {...rest}
        id="fileUpload"
        className={styles.buttonContainer__input}
      />
    </div>
  );
};

export default UploadButton;
