import { FC } from 'react';

import { Icons, ProfileImages } from '@/components/elements/images';

type Props = {
  name: string;
  householdSize: number;
  phoneNumber?: string;
  address?: string;
  zipCode?: string;
  image?: string;
};

const FamilyCard: FC<Props> = (props) => {
  const { name, householdSize, phoneNumber = 'null', address = 'null', zipCode = 'null', image } = props;
  return (
    <div>
      <ProfileImages.CircleImageSecondary image={image} />
      <h3>{`${name}家`}</h3>
      <p>{`${householdSize}人家族`}</p>
      <p>{`${phoneNumber}`}</p>
      <p>{`住所： 〒${zipCode} ${address}人家族`}</p>
      <div>
        <Icons.PencilIcon />
        <Icons.TrashCanIcon />
      </div>
    </div>
  );
};

export default FamilyCard;
