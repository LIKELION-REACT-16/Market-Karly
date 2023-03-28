import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'cartProductNumPersist',
  storage: sessionStorage,
});

export const cartProductNum = atom({
  key: 'cartProductNum',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
