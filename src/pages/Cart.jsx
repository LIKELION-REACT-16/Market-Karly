import classes from '@/styles/pages/Cart/Cart.module.scss';

import CartList from '../components/Cart/CartList';
import Credit from '../components/Cart/Credit';

const Cart = () => {
  return (
    <>
      <h2>장바구니</h2>
      <div className={classes.cart}>
        <CartList />
        <Credit />
      </div>
    </>
  );
};

export default Cart;
