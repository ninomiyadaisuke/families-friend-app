import { FC } from 'react';

import { ProfileCardList } from '@/components/elements/cards';
import { FamilyHeadAvatar } from '@/components/elements/images';
import { TUser } from '@/schema/userSchema';
import styles from '@/styles/features/profile/components/myProfile.module.scss';

type Props = {
  user: TUser;
};

const cards = [
  {
    id: '1',
    href: '/icon/default-image-profile-lg.svg',
    birthday: 'yy/mm/dd',
    phone: '08052560992',
    hobby: '映画、読書、ゲーム',
    name: '井上 聡',
    relationship: '世帯主',
  } as const,
  {
    id: '2',
    href: '/icon/default-image-profile-lg.svg',
    birthday: 'yy/mm/dd',
    phone: '08052560992',
    hobby: '映画、読書、ゲーム',
    name: '井上 聡',
    relationship: '配偶者',
  } as const,
  {
    id: '3',
    href: '/icon/default-image-profile-lg.svg',
    birthday: 'yy/mm/dd',
    phone: '08052560992',
    hobby: '映画、読書、ゲーム',
    name: '井上 聡',
    relationship: '子供',
  } as const,
  {
    id: '4',
    href: '/icon/default-image-profile-lg.svg',
    birthday: 'yy/mm/dd',
    phone: '08052560992',
    hobby: '映画、読書、ゲーム',
    name: '井上 聡',
    relationship: '親',
  } as const,
  {
    id: '5',
    href: '/icon/default-image-profile-lg.svg',
    birthday: 'yy/mm/dd',
    phone: '08052560992',
    hobby: '映画、読書、ゲーム',
    name: '井上 聡',
    relationship: '同居人',
  } as const,
];

const MyProfile: FC<Props> = (props) => {
  const { user } = props;
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
    </div>
  );
};

export default MyProfile;
