import { FC } from 'react';

import { AddButton } from '@/components/elements/buttons';
import { ProfileCardList } from '@/components/elements/cards';
import { FamilyHeadAvatar } from '@/components/elements/images';
import { useGetProfile } from '@/features/profile/apis/getProfile';
import styles from '@/styles/features/profile/components/myProfile.module.scss';

const MyProfile: FC = () => {
  const { data: profile } = useGetProfile();

  return (
    <div className={styles.profile}>
      <FamilyHeadAvatar
        image={profile && profile.image?.path}
        name={profile && profile?.last_name}
        zipCode={profile && profile.zip_code}
        address={profile && profile.address}
        numberOfPeople={profile && profile.members.length}
      />
      <ProfileCardList cards={profile && profile.members} />
      <div className={styles.profile__button}>
        <AddButton type="white" />
      </div>
    </div>
  );
};

export default MyProfile;
