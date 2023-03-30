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

const userSchema = z.object({
  image: z
    .object({
      id: z.string().min(1),
      path: z.string().min(1),
    })
    .optional(),
  name: z.string().max(20).optional(),
  zipCode: z.string().optional(),
  address: z.string().optional(),
});

const cardsSchema = z.array(
  houseHoldMemberSchema.merge(
    z.object({
      id: z.string().min(1),
    })
  )
);

const profileSchema = z.object({
  user: userSchema,
  cards: cardsSchema,
});

export type ProfileType = z.infer<typeof profileSchema>;

export type UserType = z.infer<typeof userSchema>;

export type CardsType = z.infer<typeof cardsSchema>;

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
    const data = profileSchema.parse(user.data);
    data.cards = sortByRelationship(data.cards);
    return data;
  };

  const { data } = useQuery(['houseHoldMember'], fetchHouseHoldMember);

  const cards = data?.cards;
  const user = data?.user;
  return (
    <div className={styles.profile}>
      <FamilyHeadAvatar
        image={user?.image?.path}
        name={user && user?.name}
        zipCode={user && user.zipCode}
        address={user && user.address}
        numberOfPeople={cards && cards.length}
      />
      <ProfileCardList cards={cards && cards} />
      <div className={styles.profile__button}>
        <AddButton type="white" />
      </div>
    </div>
  );
};

export default MyProfile;
