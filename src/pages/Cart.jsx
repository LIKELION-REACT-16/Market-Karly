import classes from '@/styles/pages/Cart/Cart.module.scss';

import RouteLink from '@/components/RouteLink';
import Test from '@/components/test';
import CartList from './Cart/CartList';
import Credit from './Cart/Credit';

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
