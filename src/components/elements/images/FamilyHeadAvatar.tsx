import { FC } from 'react';

import { FixedImage } from '@/components/elements/images';
import styles from '@/styles/components/elements/images/familyHeadAvatar.module.scss';

type Props = {
  image?: string;
  name: string;
  zipCode: string;
  address: string;
  numberOfPeople: number;
};

const FamilyHeadAvatar: FC<Props> = (props) => {
  const { image, name, zipCode, address, numberOfPeople } = props;
  return (
    <div className={styles.avatar}>
      <FixedImage
        src={image ? image : '/icon/default-image-profile-lg-circle.svg'}
        alt="avatar-icon"
        className={styles.avatar__image}
      />
      <h2>{name}</h2>
      <p>{`世帯人数：${numberOfPeople}人`}</p>
      <p>
        <span>{`〒${zipCode}`}</span> {address}
      </p>
    </div>
  );
};

export default FamilyHeadAvatar;
