import { FC, useState } from 'react';

import styles from '@/styles/components/elements/images/profileIcon.module.scss';

import { DropDawnLinks } from '../links';
import { FixedImage } from './';

type Props = {
  image?: string;
};

const links = [
  { text: 'マイページ', href: '/' },
  { text: 'プロフィール編集', href: '/' },
];

const ProfileIcon: FC<Props> = (props) => {
  const { image } = props;
  const [isOpen, setIsOpen] = useState(false);
  const isImage = image !== undefined;
  return (
    <div className={styles.icon} onClick={() => setIsOpen((prev) => !prev)}>
      <FixedImage
        className={isImage ? styles.icon__image : styles.icon__image_default}
        src={isImage ? image : '/icon/profile-icon.svg'}
        alt="profile-icon"
      />
      {isOpen && (
        <div className={styles.icon__dropdawn}>
          <DropDawnLinks links={links} auth="ログアウト" />
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
