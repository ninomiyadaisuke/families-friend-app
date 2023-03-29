import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import styles from '@/styles/components/elements/cards/profileCardList.module.scss';

import { ProfileCard } from './';

type Props = {
  cards: {
    household_members_id: string;
    birthday: string;
    phone: string;
    hobby: string;
    first_name: string;
    relationship: '世帯主' | '配偶者' | '子供' | '親' | '同居人';
  }[];
};

const ProfileCardList: FC<Props> = (props) => {
  const { cards } = props;

  return (
    <ul className={styles.list}>
      {cards &&
        cards.map((card) => (
          <li key={card.household_members_id}>
            <ProfileCard
              birthday={card.birthday}
              phone={card.phone}
              hobby={card.hobby}
              name={card.first_name}
              relationship={card.relationship}
            />
          </li>
        ))}
    </ul>
  );
};

export default ProfileCardList;
