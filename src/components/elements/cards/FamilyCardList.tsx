import { FC } from 'react';

import styles from '@/styles/components/elements/cards/familyCardList.module.scss';

import { FamilyCard } from '.';

type Props = {
  familiesData: {
    id: string;
    name: string;
    householdSize: number;
    phoneNumber?: string;
    address?: string;
    image?: string;
    href: string;
  }[];
};

const FamilyCardList: FC<Props> = (props) => {
  const { familiesData } = props;
  const deleteClick = (id: string) => {
    const test = id;
  };
  return (
    <section className={styles.list}>
      {familiesData.map((data) => (
        <ul key={data.id}>
          <li>
            <FamilyCard
              name={data.name}
              householdSize={data.householdSize}
              phoneNumber={data.phoneNumber}
              address={data.address}
              image={data.image}
              href={data.href}
              onClick={() => deleteClick(data.id)}
            />
          </li>
        </ul>
      ))}
    </section>
  );
};

export default FamilyCardList;
