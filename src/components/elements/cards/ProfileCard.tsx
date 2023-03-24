import Link from 'next/link';
import { FC } from 'react';

import { PrimaryButton } from '@/components/elements/buttons';
import { ResponsiveImage } from '@/components/elements/images';
import styles from '@/styles/components/elements/cards/profileCard.module.scss';

type Props = {
  href: string;
  birthday: string;
  image?: string;
  phone: string;
  hobby: string;
  name: string;
  relationship: '世帯主' | '配偶者' | '子供' | '親' | '同居人';
};

const ProfileCard: FC<Props> = (props) => {
  const { href, image, phone, hobby, name, relationship, birthday } = props;
  const test = () => {
    const test = 'test';
  };
  return (
    <Link href={href} className={styles.card}>
      <div>
        <ResponsiveImage
          src={image ? image : '/icon/default-image-profile-lg.svg'}
          width={146}
          height={146}
          alt="profile-image"
        />
      </div>
      <div>
        <p>{name}</p>
        <p>{relationship}</p>
      </div>
      <div>
        <p>誕生日:{birthday}</p>
        <p>電話番号:{phone}</p>
        <p>趣味:</p>
        <p>{hobby}</p>
      </div>
      <div>
        <PrimaryButton onClick={test} text="渡す" type="light_blue" />
        <PrimaryButton onClick={test} text="一覧" type="light_blue" />
      </div>
    </Link>
  );
};

export default ProfileCard;
