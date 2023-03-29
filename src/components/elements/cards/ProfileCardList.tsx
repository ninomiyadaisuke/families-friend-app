import { FC } from 'react';

import type { CardsType } from '@/features/profile/components/MyProfile';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import styles from '@/styles/components/elements/cards/profileCardList.module.scss';

import { ProfileCard } from './';

type Props = {
  cards?: CardsType;
};

const ProfileCardList: FC<Props> = (props) => {
  const { tablet } = useBreakPoint();
  const { cards } = props;

  return (
    <ul className={styles.list}>
      {cards &&
        cards.map((card) => (
          <li key={card.id}>
            <ProfileCard
              image={card.image?.path}
              birthday={card.birthday}
              phone={card.phone_number}
              hobby={card.hobby}
              name={tablet ? card.first_name : card.last_name + card.first_name}
              relationship={card.relationship}
            />
          </li>
        ))}
    </ul>
  );
};

export default ProfileCardList;
