import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC } from 'react';

import { AddButton } from '@/components/elements/buttons';
import { ProfileCardList } from '@/components/elements/cards';
import { FamilyHeadAvatar } from '@/components/elements/images';
import { TUser } from '@/schema/userSchema';
import styles from '@/styles/features/profile/components/myProfile.module.scss';

type Props = {
  user: TUser;
};

const MyProfile: FC<Props> = () => {
  const fetchUser = async () => {
    const user = await axios.get('/api/my');
    const data = user.data;
    return data;
  };

  const { data } = useQuery(['member'], fetchUser);

  return (
    <div className={styles.profile}>
      <FamilyHeadAvatar
        image="/icon/profile-icon-demo.jpg"
        name={'二ノ宮'}
        zipCode={'000-0000'}
        address={'東京都特許許可局局長許可却下'}
        numberOfPeople={6}
      />
      <ProfileCardList cards={data} />
      <div className={styles.profile__button}>
        <AddButton type="white" />
      </div>
    </div>
  );
};

export default MyProfile;
