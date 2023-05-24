import { FC } from 'react';

import { RoundedDateSelect, RoundedInput } from '@/components/forms';
import { LabelLayout } from '@/components/layouts';
import styles from '@/styles/components/forms/familyInfo.module.scss';

const FamilyInfo: FC = () => {
  return (
    <div className={styles.forms}>
      <div className={styles.forms__container}>
        <LabelLayout
          required="required"
          label="名前"
          type="flex"
          children={(lable) => (
            <div className={styles.forms__flex}>
              <RoundedInput id={lable} type="text" iconType="user" placeholder="苗字" width={styles.forms__input} />
              <RoundedInput type="text" placeholder="名前" width={styles.forms__input} />
            </div>
          )}
        />
        <LabelLayout
          required="required"
          label="名前(フリガナ)"
          type="flex"
          children={(label) => (
            <div className={styles.forms__flex}>
              <RoundedInput id={label} type="text" iconType="user" placeholder="苗字" width={styles.forms__input} />
              <RoundedInput type="text" placeholder="名前" width={styles.forms__input} />
            </div>
          )}
        />
        <LabelLayout
          label="生年月日"
          type="flex"
          children={(label) => (
            <div className={styles.forms__flex}>
              <RoundedInput id={label} type="text" iconType="user" placeholder="苗字" width={styles.forms__input} />
              <RoundedInput type="text" placeholder="名前" width={styles.forms__input} />
            </div>
          )}
        />
      </div>
      <div className={styles.forms__uploader}></div>
    </div>
  );
};

export default FamilyInfo;
