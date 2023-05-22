import HTMLReactParser from 'html-react-parser';
import Link from 'next/link';
import { FC } from 'react';

import { Icons, ProfileImages } from '@/components/elements/images';
import styles from '@/styles/components/elements/cards/familyCard.module.scss';

type Props = {
  name: string;
  householdSize: number;
  phoneNumber?: string;
  address?: string;
  zipCode?: string;
  image?: string;
  href: string;
  onClick: () => void;
};

const FamilyCard: FC<Props> = (props) => {
  const { name, householdSize, phoneNumber = 'null', address = 'null', zipCode = 'null', image, href, onClick } = props;

  return (
    <Link href={href} className={styles.card}>
      <div className={styles.card__profile}>
        <div className={styles.card__image}>
          <ProfileImages.CircleImageSecondary image={image} />
        </div>
        <div className={styles.card__texts}>
          <h3 className={styles.card__title}>{`${name}家`}</h3>
          <p className={styles.card__text}>{`${householdSize}人家族`}</p>
          <p className={styles.card__text}>{`${phoneNumber}`}</p>
          <p className={styles.card__text}>{HTMLReactParser(`<span>住所：〒${zipCode}</span>${address}`)}</p>
        </div>
      </div>
      <div
        className={styles.card__icon}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onClick();
        }}
      >
        <Icons.TrashCanIcon />
      </div>
    </Link>
  );
};

export default FamilyCard;
