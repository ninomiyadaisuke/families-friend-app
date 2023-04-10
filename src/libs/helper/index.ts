import { CardsType, RelationshipType } from '@/features/profile/apis/getProfile';

export const sortByRelationship = (cards: CardsType) => {
  const relationshipOrder: RelationshipType[] = ['世帯主', '配偶者', '子供', '親', '同居人', ''];
  // 元の配列をrelationshipプロパティでソート
  const sortedCards = cards.sort((a, b) => {
    return relationshipOrder.indexOf(a.relationship) - relationshipOrder.indexOf(b.relationship);
  });
  return sortedCards;
};
