import { FC } from 'react';

import styles from '@/styles/components/forms/radio.module.scss';

// type Props = {
//   radioButtons:{label:string,}
// };

const Radio: FC = (props) => {
  return (
    <div className={styles.radioContainer}>
      <label>
        <input type="radio" value={'貰った'} />
        貰った
      </label>
      <label>
        <input type="radio" value={'渡した'} />
        渡した
      </label>
    </div>
  );
};

export default Radio;
