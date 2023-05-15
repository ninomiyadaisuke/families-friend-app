import { FC, useState } from 'react';

import styles from '@/styles/components/elements/images/profileIcon.module.scss';

import { DropDawnLinks } from '../links';
import { FixedImage, ProfileImages } from './';

type Props = {
  image: string;
};

const links = [
  { text: 'マイページ', href: '/profile' },
  { text: 'プロフィール編集', href: '/profile/edit' },
];

const ProfileIcon: FC<Props> = (props) => {
  const { image } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.icon} onClick={() => setIsOpen((prev) => !prev)}>
      <ProfileImages.CircleUserImage image={image} />
      {isOpen && (
        <div className={styles.icon__dropdawn}>
          <DropDawnLinks links={links} auth="ログアウト" />
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
