export const homeAboutTitle = {
  initial: { x: '-80%', y: '-20%' },
  animate: {
    x: '24%',
    y: '-20%',
    transition: { duration: 2 },
  },
};

export const homeServiceTitle = {
  initial: { x: '100%' },
  animate: {
    x: '0%',
    transition: { duration: 2 },
  },
};

export const presentTag = {
  initial: { x: '-200%', y: '10%', opacity: 1, rotate: 0 },
  animate: {
    x: '-5%',
    y: '75%',
    rotate: 45,
    opacity: 1,
    transition: { duration: 1.5 },
  },
};

export const presentVerticalRibbon = {
  initial: { x: '-270%', y: '160%', opacity: 1, rotate: 120 },
  animate: {
    x: '460%',
    y: '220%',
    rotate: 360,
    opacity: 1,
    scaleY: 1.9,
    scaleX: 1.2,
    transition: { duration: 1.5 },
  },
};

export const presentBottomOfTheLidLeft = {
  initial: { x: '1150%', y: '-40%', rotate: 140 },
  animate: {
    x: '210%',
    y: '114%',
    rotate: -270,
    transition: { duration: 1.5 },
  },
};

export const presentBottomOfTheLidRight = {
  initial: { x: '-150%', y: '350%', rotate: 140 },
  animate: {
    x: '570%',
    y: '114%',
    rotate: -270,
    transition: { duration: 1.5 },
  },
};

export const presentBeforeRibbon = {
  initial: { x: '1150%', y: '250%', rotate: 225 },
  animate: {
    x: '1000%',
    y: '210%',
    scale: 0.8,
    rotate: 200,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const presentAfterRibbon = {
  initial: {
    opacity: 0,
    rotate: 200,
    x: '1000%',
    y: '250%',
  },
  animate: {
    opacity: 1,
    x: '460%',
    y: '50%',
    rotate: 90,
    scale: 1.2,
    transition: {
      delay: 0.3,
      duration: 1.2,
    },
  },
};

export const phoneCircle = {
  initial: { x: '1300%', y: '850%' },
  animate: {
    x: '1065%',
    y: '770%',
    transition: { duration: 1.5 },
  },
};

export const phoneShadow = {
  initial: { x: '300%', y: '285%', rotate: 140, scaleX: 0.3 },
  animate: {
    x: '510%',
    y: '225%',
    rotate: 0,
    scaleX: 1,
    transition: { duration: 1.5 },
  },
};

export const userList = {
  initial: { x: '430%', y: '-50%', rotate: -45, scaleX: 0.5, scaleY: 0.7 },
  animate: {
    x: '373%',
    y: '9%',
    rotate: 0,
    scaleX: 1,
    scaleY: 1,
    transition: { duration: 1.5 },
  },
};

export const noteCheckbox = {
  initial: { x: '455%', y: '1235%', scale: 0.5 },
  animate: {
    x: '365%',
    y: '1585%',
    scale: 1,
    transition: { duration: 1.5 },
  },
};
export const noteLightBlueSmall = {
  initial: { x: '-150%', y: '830%', rotate: 45, scaleX: 0.5, scaleY: 1.7 },
  animate: {
    x: '50%',
    y: '808%',
    scaleX: 1,
    scaleY: 1,
    rotate: 0,
    transition: { duration: 1.5 },
  },
};

export const noteBlue = {
  initial: { x: '600%', y: '950%', rotate: -45, scaleX: 0.4, scaleY: 1.8 },
  animate: {
    x: '125%',
    y: '800%',
    scaleX: 1,
    scaleY: 1,
    rotate: 0,
    transition: { duration: 1.5 },
  },
};

export const noteLightBlueBig = {
  initial: { x: '30%', y: '610%', scaleY: 0.2 },
  animate: {
    x: '30%',
    y: '518%',
    scaleY: 1,
    transition: { duration: 1.5 },
  },
};

export const noteShadow = {
  initial: { x: '29%', y: '465%' },
};

export const userListShadow = {
  initial: { x: '390%', y: '25%' },
};
