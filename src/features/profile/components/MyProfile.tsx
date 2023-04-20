import { FC } from 'react';

import { AddButton } from '@/components/elements/buttons';
import { ProfileCardList } from '@/components/elements/cards';
import { FamilyHeadAvatar } from '@/components/elements/images';
import { useGetProfile } from '@/features/profile/apis/getProfile';
import { extractUser } from '@/libs/helper';
import styles from '@/styles/features/profile/components/myProfile.module.scss';

import { TProfileCard } from '../schema';

const MyProfile: FC = () => {
  const { data: profile } = useGetProfile();

  const members = [extractUser(profile), ...(profile?.members ?? [])];
  const filterMembers = members.filter((member) => member !== undefined) as TProfileCard;

  return (
    <div className={styles.profile}>
      <FamilyHeadAvatar
        image={profile && profile.image?.path}
        name={profile && profile?.last_name}
        zipCode={profile && profile.zip_code}
        address={profile && profile.address}
        numberOfPeople={profile && profile.members.length + 1}
      />
      <ProfileCardList cards={filterMembers} />
      <div className={styles.profile__button}>
        <AddButton type="white" />
      </div>
    </div>
  );
};

export default MyProfile;
