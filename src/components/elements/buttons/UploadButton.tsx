import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { useImageUpload } from '@/hooks/useImageUpload';
import styles from '@/styles/components/elements/buttons/uploadButton.module.scss';

type Props = {
  registration: UseFormRegisterReturn;
};

const UploadButton: FC<Props> = (props) => {
  const { registration } = props;
  const { onChange, ...rest } = registration;
  const { fileChangedHandler } = useImageUpload();

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
