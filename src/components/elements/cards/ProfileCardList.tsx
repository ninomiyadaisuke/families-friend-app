import { FC } from 'react';

import styles from '@/styles/components/layouts/profileCardList.module.scss';

type Props = {
  cards: any[];
};

const ProfileCardList: FC<Props> = (props) => {
  const { cards } = props;
  return (
    <ul className={styles.list}>
      {cards.map((card) => (
        <li></li>
      ))}
    </ul>
  );
};

export default ProfileCardList;
