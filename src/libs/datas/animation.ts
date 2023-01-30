import {
  aboutDottedLine,
  aboutLine,
  aboutList,
  aboutNote,
  aboutPhone,
  aboutPresent,
  aboutWavyLine,
  noteBlue,
  noteCheckbox,
  noteLightBlueBig,
  noteLightBlueSmall,
  noteShadow,
  phoneCircle,
  phoneShadow,
  presentAfterRibbon,
  presentBeforeRibbon,
  presentBottomOfTheLidLeft,
  presentBottomOfTheLidRight,
  presentTag,
  presentVerticalRibbon,
  userList,
  userListShadow,
} from '@/libs/variants';
import aboutTopStyles from '@/styles/components/about/aboutTop.module.scss';
import homePageStyles from '@/styles/components/home/about.module.scss';

// home page animation data
export const homeAnimationData = [
  //note
  {
    widht: 43,
    height: 49,
    variants: noteBlue,
    src: '/home/animation-parts/noteBlue.svg',
    alt: 'note-animation',
    className: homePageStyles.about__image_noteLightBlueSmall,
  },
  {
    widht: 37,
    height: 37,
    variants: noteCheckbox,
    src: '/home/animation-parts/noteCheckbox.svg',
    alt: 'note-animation',
    className: homePageStyles.about__image_noteCheckbox,
  },
  {
    widht: 155,
    height: 105,
    variants: noteLightBlueBig,
    src: '/home/animation-parts/noteLightBlueBig.svg',
    alt: 'note-animation',
    className: homePageStyles.about__image_noteLightBlueBig,
  },
  {
    widht: 43,
    height: 49,
    variants: noteLightBlueSmall,
    src: '/home/animation-parts/noteLightBlue.svg',
    alt: 'note-animation',
    className: homePageStyles.about__image_noteLightBlueSmall,
  },
  {
    widht: 140,
    height: 118,
    variants: noteShadow,
    src: '/home/about-gift-note-shadow.png',
    alt: 'note-animation',
    className: homePageStyles.about__image_noteShadow,
  },

  // phone
  {
    widht: 65,
    height: 65,
    variants: phoneCircle,
    src: '/home/animation-parts/phoneCircle.svg',
    alt: 'phone-animation',
    className: homePageStyles.about__image_phoneCircle,
  },
  {
    widht: 126,
    height: 197,
    variants: phoneShadow,
    src: '/home/animation-parts/phoneShadow.svg',
    alt: 'phone-animation',
    className: homePageStyles.about__image_phoneShadow,
  },

  // present
  {
    widht: 30,
    height: 96,
    variants: presentAfterRibbon,
    src: '/home/animation-parts/presentAfterRibbon.svg',
    alt: 'present-animation',
    className: homePageStyles.about__image_presentAfterRibbon,
  },

  {
    widht: 25,
    height: 96,
    variants: presentBeforeRibbon,
    src: '/home/animation-parts/presentBeforeRibbon.svg',
    alt: 'present-animation',
    className: homePageStyles.about__image_presentBeforeRibbon,
  },

  {
    widht: 27,
    height: 60,
    variants: presentBottomOfTheLidLeft,
    src: '/home/animation-parts/presentBottomOfTheLid.svg',
    alt: 'present-animation',
    className: homePageStyles.about__image_presentBottomOfTheLid,
  },

  {
    widht: 65,
    height: 38.4,
    variants: presentBottomOfTheLidRight,
    src: '/home/animation-parts/presentBottomOfTheLid.svg',
    alt: 'present-animation',
    className: homePageStyles.about__image_presentBottomOfTheLid,
  },

  {
    widht: 43,
    height: 49,
    variants: presentTag,
    src: '/home/animation-parts/presentTag.svg',
    alt: 'present-animation',
    className: homePageStyles.about__image_tag,
  },
  {
    widht: 25,
    height: 75,
    variants: presentVerticalRibbon,
    src: '/home/animation-parts/presentVerticalRibbon.svg',
    alt: 'present-animation',
    className: homePageStyles.about__image_verticalRibbon,
  },

  // user
  {
    widht: 171,
    height: 216,
    variants: userList,
    src: '/home/animation-parts/userList.svg',
    alt: 'user-animation',
    className: homePageStyles.about__image_userList,
  },
  {
    widht: 160,
    height: 190,
    variants: userListShadow,
    src: '/home/about-gift-list-shadow.png',
    alt: 'user-animation',
    className: homePageStyles.about__image_userListShadow,
  },
];

// about page animation data

type TVariants = {
  [key in 'initial']: unknown;
};

type TData = {
  src: string;
  width: number;
  height: number;
  alt: string;
  className: string;
  variants: TVariants;
};

export const aboutAnimationData = [
  {
    src: '/about/about-present.svg',
    width: 275,
    height: 229,
    alt: 'present-image',
    className: aboutTopStyles.aboutTop__images_present,
    variants: aboutPresent,
  },
  {
    src: '/about/about-list.svg',
    width: 245,
    height: 257,
    alt: 'list-image',
    className: aboutTopStyles.aboutTop__images_list,
    variants: aboutList,
  },
  {
    src: '/about/about-note.svg',
    width: 202,
    height: 262,
    alt: 'note-image',
    className: aboutTopStyles.aboutTop__images_note,
    variants: aboutNote,
  },
  {
    src: '/about/about-phone.svg',
    width: 216,
    height: 268,
    alt: 'phone-image',
    className: aboutTopStyles.aboutTop__images_phone,
    variants: aboutPhone,
  },
  {
    src: '/about/line.svg',
    width: 311,
    height: 1,
    alt: 'present-image',
    className: aboutTopStyles.aboutTop__images_line,
    variants: aboutLine,
  },
  {
    src: '/about/wavyLine.svg',
    width: 547,
    height: 181,
    alt: 'wavyLine-image',
    className: aboutTopStyles.aboutTop__images_wavyLine,
    variants: aboutWavyLine,
  },
  {
    src: '/about/dottedLine.svg',
    width: 358,
    height: 1,
    alt: 'dotted-image',
    className: aboutTopStyles.aboutTop__images_dotLine,
    variants: aboutDottedLine,
  },
] as const satisfies readonly TData[];
