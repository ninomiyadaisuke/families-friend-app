import Link from 'next/link';
import { FC } from 'react';

import { ResponsiveImage } from '@/components/elements/images';
import { TServiceCard } from '@/libs/datas/serviceData';
import styles from '@/styles/components/elements/cards/serviceCard.module.scss';

type Props = {
  cardData: TServiceCard;
};

const ServiceCard: FC<Props> = (props) => {
  const { cardData } = props;
  const { src, type, width, height, title, text, href } = cardData;

  const className = (() => {
    switch (type) {
      case 'families':
        return styles.card__families;
      case 'present':
        return styles.card__present;
      case 'presentList':
        return styles.card__presentList;
      default: {
        const _: never = type;
      }
    }
  })();
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.card__container}>
        <div className={className}>
          <ResponsiveImage src={src} alt={type} width={width} height={height} />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
