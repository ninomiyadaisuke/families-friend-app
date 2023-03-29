import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC } from 'react';
import { z } from 'zod';

import { AddButton } from '@/components/elements/buttons';
import { ProfileCardList } from '@/components/elements/cards';
import { FamilyHeadAvatar } from '@/components/elements/images';
import { houseHoldMemberSchema } from '@/schema/houseHoldMemberSchema';
import { TUser } from '@/schema/userSchema';
import styles from '@/styles/features/profile/components/myProfile.module.scss';

type Props = {
  user: TUser;
};

const fetchMemberSchema = z.array(
  houseHoldMemberSchema.merge(
    z.object({
      id: z.string().min(1),
    })
  )
);

export type CardsType = z.infer<typeof fetchMemberSchema>;

type RelationshipType = '世帯主' | '配偶者' | '子供' | '親' | '同居人';

const MyProfile: FC<Props> = () => {
  const sortByRelationship = (cards: CardsType) => {
    const relationshipOrder: RelationshipType[] = ['世帯主', '配偶者', '子供', '親', '同居人'];
    // 元の配列をrelationshipプロパティでソート
    const sortedCards = cards.sort((a, b) => {
      return relationshipOrder.indexOf(a.relationship) - relationshipOrder.indexOf(b.relationship);
    });
    return sortedCards;
  };
  const fetchHouseHoldMember = async () => {
    const user = await axios.get('/api/my');
    const data = fetchMemberSchema.parse(user.data);
    return sortByRelationship(data);
  };

  const { data: cards } = useQuery(['houseHoldMember'], fetchHouseHoldMember);

  return (
    <div className={styles.profile}>
      <FamilyHeadAvatar
        image="/icon/profile-icon-demo.jpg"
        name={'二ノ宮'}
        zipCode={'000-0000'}
        address={'東京都特許許可局局長許可却下'}
        numberOfPeople={6}
      />
      <ProfileCardList cards={cards} />
      <div className={styles.profile__button}>
        <AddButton type="white" />
      </div>
    </div>
  );
};

export default MyProfile;
