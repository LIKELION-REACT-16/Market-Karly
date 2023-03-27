import { selector } from 'recoil';
import { productQuantity, productPrice } from '@/@store/detailCardState.js';

export const totalPriceSelector = selector({
  key: 'totalPriceSelector',

  get: ({ get }) => {
    const quantityOfProduct = get(productQuantity);
    const priceOfProduct = get(productPrice);

    return quantityOfProduct * priceOfProduct;
  },
});
