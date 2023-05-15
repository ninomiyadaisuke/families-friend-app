import { FC } from 'react';

import { FixedImage } from '.';

type ProfileImagesProps = {
  SquareImagePrimary: FC;
  SquareImageSecondary: FC;
  RectangleImage: FC;
  CircleImagePrimary: FC;
  CircleImageSecondary: FC;
  CircleUserImage: FC;
  CircleFamilyHeadImage: FC;
};

const ProfileImages: ProfileImagesProps = {
  CircleImagePrimary: () => <div></div>,
  CircleImageSecondary: () => <div></div>,
  CircleFamilyHeadImage: () => <div></div>,
  CircleUserImage: () => <div></div>,
  RectangleImage: () => <div></div>,
  SquareImagePrimary: () => <div></div>,
  SquareImageSecondary: () => <div></div>,
};

export default ProfileImages;
