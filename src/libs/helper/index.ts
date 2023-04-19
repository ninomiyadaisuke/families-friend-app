import { CardsType, FetchProfle, RelationshipType } from '@/features/profile/schema';

export const sortByRelationship = (cards: CardsType) => {
  const relationshipOrder: RelationshipType[] = ['世帯主', '配偶者', '子供', '親', '同居人', '', undefined];
  // 元の配列をrelationshipプロパティでソート
  const sortedCards = cards.sort((a, b) => {
    return relationshipOrder.indexOf(a.relationship) - relationshipOrder.indexOf(b.relationship);
  });
  return sortedCards;
};

export const extractUser = (profile?: FetchProfle) => {
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

export function removeUndefinedProperties<T extends Record<string, unknown>>(obj: T): T {
  if (Array.isArray(obj)) {
    throw new Error('removeUndefinedProperties function does not accept arrays');
  }
  return Object.fromEntries(Object.entries(obj).filter(([_, value]) => value !== undefined)) as T;
}
