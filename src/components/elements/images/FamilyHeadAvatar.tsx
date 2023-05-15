import { FC } from 'react';

import { FixedImage, ProfileImages } from '@/components/elements/images';
import styles from '@/styles/components/elements/images/familyHeadAvatar.module.scss';

type Props = {
  image?: string;
  name?: string;
  zipCode?: string;
  address?: string;
  numberOfPeople?: number | 'null';
};

const FamilyHeadAvatar: FC<Props> = (props) => {
  const { image, name = 'null', zipCode = 'null', address = 'null', numberOfPeople = 'null' } = props;

  return (
    <div className={styles.avatar}>
      <ProfileImages.CircleFamilyHeadImage image={image} />
      <h2>{`${name} 家`}</h2>
      <p>{`世帯人数：${numberOfPeople}人`}</p>
      <p>
        <span>{`〒${zipCode}`}</span> {`住所:${address}`}
      </p>
    </div>
  );
};

export default FamilyHeadAvatar;
