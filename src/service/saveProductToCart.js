export default function saveProductToCart(productId, productQuantity) {
  let tmpStorage;

  if (!productId) {
    console.error('장바구니 담기 기능: productId가 올바르지 않습니다.');
    return;
  } else if (productQuantity === 0) {
    return;
  }

  if (sessionStorage.getItem('cart') === null) {
    sessionStorage.setItem(
      'cart',
      JSON.stringify([packingInObject(productId, productQuantity)])
    );
  } else {
    tmpStorage = JSON.parse(sessionStorage.getItem('cart'));

    for (let key in tmpStorage) {
      if (tmpStorage[key].productId === productId) {
        tmpStorage[key].quantity += productQuantity;

        sessionStorage.setItem('cart', JSON.stringify(tmpStorage));
        return;
      }
    }

    tmpStorage.push(packingInObject(productId, productQuantity));
    sessionStorage.setItem('cart', JSON.stringify(tmpStorage));
  }
}

const packingInObject = (productId, productQuantity) => ({
  productId: productId,
  quantity: productQuantity,
});
