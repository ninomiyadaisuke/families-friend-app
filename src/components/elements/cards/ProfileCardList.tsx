import { FC } from 'react';

import styles from '@/styles/components/elements/cards/profileCardList.module.scss';

import { ProfileCard } from './';

type Props = {
  cards: {
    href: string;
    birthday: string;
    phone: string;
    hobby: string;
    name: string;
    relationship: '世帯主' | '配偶者' | '子供' | '親' | '同居人';
  }[];
};

const ProfileCardList: FC<Props> = (props) => {
  const { cards } = props;
  return (
    <ul className={styles.list}>
      {cards.map((card) => (
        <li>
          <ProfileCard
            href={card.href}
            birthday={card.birthday}
            phone={card.phone}
            hobby={card.hobby}
            name={card.name}
            relationship={card.relationship}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProfileCardList;
