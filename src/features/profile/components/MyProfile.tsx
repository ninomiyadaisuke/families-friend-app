import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import { AddButton } from '@/components/elements/buttons';
import { ProfileCardList } from '@/components/elements/cards';
import { FamilyHeadAvatar } from '@/components/elements/images';
import { useGetProfile } from '@/features/profile/apis/getProfile';
import styles from '@/styles/features/profile/components/myProfile.module.scss';

const MyProfile: FC = () => {
  const { data } = useGetProfile();

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
