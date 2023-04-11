import { FC } from 'react';

import { useBreakPoint } from '@/hooks/useBreakPoint';
import { CardsType } from '@/libs/helper';
import styles from '@/styles/components/elements/cards/profileCardList.module.scss';

import { ProfileCard } from './';

type Props = {
  cards?: CardsType;
};

const ProfileCardList: FC<Props> = (props) => {
  const { tablet } = useBreakPoint();
  const { cards } = props;
  const formatDate = (data?: string) => {
    if (!data) return;
    const date = new Date(data);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
  };
  return (
    <ul className={styles.list}>
      {cards &&
        cards.map((card) => (
          <li key={card.id}>
            <ProfileCard
              image={card.image?.path}
              birthday={formatDate(card.birthday)}
              phone={card.phone_number}
              hobby={card.hobby}
              name={tablet ? card.first_name : card.last_name && card.last_name + card.first_name}
              relationship={card.relationship}
            />
          </li>
        ))}
    </ul>
  );
};

export default ProfileCardList;
