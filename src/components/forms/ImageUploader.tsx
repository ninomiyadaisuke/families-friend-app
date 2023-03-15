import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from '@/styles/components/forms/ImageUploader.module.scss';

import { ErrorText } from '../elements/texts';

type Props = {
  registration: UseFormRegisterReturn;
  errorMessage?: string;
};

const ImageUploader: FC<Props> = (props) => {
  const { registration, errorMessage } = props;

  return (
    <>
      <div className={styles.buttonContainer}>
        <label htmlFor="fileUpload" className={styles.buttonContainer__label}>
          ファイルを選択する
        </label>
        <input type="file" {...registration} id="fileUpload" className={styles.buttonContainer__input} />
      </div>
    </>
  );
};

export default ImageUploader;
