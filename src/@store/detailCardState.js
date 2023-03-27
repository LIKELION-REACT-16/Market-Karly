import { atom } from 'recoil';

export const productID = atom({
  key: 'productID',
  default: '',
});

export const productTitleState = atom({
  key: 'titleState',
  default: '',
});

export const productDescriptionState = atom({
  key: 'descriptionState',
  default: '',
});

export const productQuantity = atom({
  key: 'quantity',
  default: 1,
});

export const productPrice = atom({
  key: 'price',
  default: 0,
});

export const productImgObject = atom({
  key: 'ImgObject',
  default: {},
});
