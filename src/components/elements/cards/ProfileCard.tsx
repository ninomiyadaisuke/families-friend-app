import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { PrimaryButton } from '@/components/elements/buttons';
import { FixedImage, ResponsiveImage } from '@/components/elements/images';
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
  const router = useRouter();

  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <div className={styles.card__image}>
          <ResponsiveImage
            src={image ? image : '/icon/default-image-profile-lg.svg'}
            width={146}
            height={146}
            alt="profile-image"
          />
        </div>
        <div className={styles.card__nameRelationship}>
          <div className={styles.card__nameRelationship_name}>
            <p>{name}</p>
            <Link href={href}>
              <FixedImage src="/icon/edit-icon.svg" alt="edit-icon" className={styles.card__icon} />
            </Link>
          </div>
          <span>{relationship}</span>
        </div>
      </div>
      <div className={styles.card__container}>
        <div className={styles.card__profile}>
          <p>誕生日:{birthday}</p>
          <p>電話番号:{phone}</p>
          <p>趣味:</p>
          <p>{hobby}</p>
        </div>
        <div className={styles.card__buttons}>
          <PrimaryButton
            className={styles.card__buttons_button}
            onClick={() => router.push('/')}
            text="渡す"
            type="light_blue"
          />
          <PrimaryButton
            className={styles.card__buttons_button}
            onClick={() => router.push('/')}
            text="一覧"
            type="light_blue"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;