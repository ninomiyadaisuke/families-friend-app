import { FC } from 'react';

import styles from '@/styles/components/elements/images/profileImages.module.scss';

import { FixedImage, ResponsiveImage } from '.';

type ImageProps = {
  image?: string;
};

type ProfileImagesProps = {
  SquareImagePrimary: FC<ImageProps>;
  SquareImageSecondary: FC<ImageProps>;
  RectangleImage: FC<ImageProps>;
  CircleImagePrimary: FC<ImageProps>;
  CircleImageSecondary: FC<ImageProps>;
  CircleUserImage: FC<ImageProps>;
  CircleFamilyHeadImage: FC<ImageProps>;
};

const ProfileImages: ProfileImagesProps = {
  CircleImagePrimary: ({ image }) => <div></div>,
  CircleImageSecondary: ({ image }) => <div></div>,
  CircleFamilyHeadImage: ({ image }) => (
    <FixedImage
      src={image || '/icon/default-image-profile-lg-circle.svg'}
      alt="avatar-icon"
      className={styles.images__circleFamilyHead}
    />
  ),
  CircleUserImage: ({ image }) => (
    <FixedImage src={image as string} alt="avatar-icon" className={styles.images__circleUser} />
  ),
  RectangleImage: ({ image }) => (
    <FixedImage
      src={image || '/icon/default-image-profile.svg'}
      alt="profile-icon"
      className={styles.images__rectangle}
    />
  ),
  SquareImagePrimary: ({ image }) => (
    <FixedImage
      src={image || '/icon/default-image-profile-lg.svg'}
      alt="profile-image"
      className={styles.images__squarePrimary}
    />
  ),
  SquareImageSecondary: ({ image }) => <div></div>, //後で実装
};

export default ProfileImages;
