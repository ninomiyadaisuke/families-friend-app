import { z } from 'zod';

import { cardsSchema, TProfile } from '@/features/profile/schema';
import { TUser } from '@/schema/userSchema';

export type RelationshipType = '世帯主' | '配偶者' | '子供' | '親' | '同居人' | '' | undefined;
export type CardsType = z.infer<typeof cardsSchema>;

export const sortByRelationship = (cards: CardsType) => {
  const relationshipOrder: RelationshipType[] = ['世帯主', '配偶者', '子供', '親', '同居人', '', undefined];
  // 元の配列をrelationshipプロパティでソート
  const sortedCards = cards.sort((a, b) => {
    return relationshipOrder.indexOf(a.relationship) - relationshipOrder.indexOf(b.relationship);
  });
  return sortedCards;
};

export const extractUser = (profile?: TProfile) => {
  if (!profile) return;
  const data = {
    id: profile.uid,
    file: profile.file,
    first_name: profile.first_name,
    first_name_kana: profile.first_name_kana,
    last_name: profile.last_name,
    last_name_kana: profile.last_name_kana,
    email: profile.email,
    phone_number: profile.phone_number,
    birthday: profile.birthday,
    hobby: profile.hobby,
    relationship: profile.relationship,
    image: profile.image,
  };
  if (data === undefined) return;
  return data;
};
