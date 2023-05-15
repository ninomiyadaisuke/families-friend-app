import { FC } from 'react';

import styles from '@/styles/components/elements/images/profileImages.module.scss';

import { FixedImage } from '.';

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
  ThumbnailImage: FC<ImageProps>;
};

const ProfileImages: ProfileImagesProps = {
  CircleImagePrimary: ({ image }) => (
    <FixedImage
      src={image || '/icon/default-image-profile-lg-circle.svg'}
      alt="profile-icon"
      className={styles.images__circle}
    />
  ),
  CircleImageSecondary: ({ image }) => (
    <FixedImage
      src={image || '/icon/circle-profile-secondary.svg'}
      alt="profile-icon"
      className={styles.images__circle}
    />
  ),
  CircleFamilyHeadImage: ({ image }) => (
    <FixedImage
      src={image || '/icon/default-image-profile-lg-circle.svg'}
      alt="avatar-icon"
      className={styles.images__circleFamilyHead}
    />
  ),
  CircleUserImage: ({ image }) => (
    <FixedImage
      src={image || '/icon/default-image-profile-lg-circle.svg'}
      alt="avatar-icon"
      className={styles.images__circleUser}
    />
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
  ThumbnailImage: ({ image }) => (
    <FixedImage src={image as string} alt="thumbnail-image" className={styles.images__thumbnail} />
  ),
};

export default ProfileImages;
