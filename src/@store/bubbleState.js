import { atom } from 'recoil';

export const bubbleDisplayState = atom({
  key: 'bubbleDisplayState',
  default: false,
});

export const isInTheCartState = atom({
  key: 'inTheCart',
  default: false,
});
