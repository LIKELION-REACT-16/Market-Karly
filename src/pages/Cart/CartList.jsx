import classes from '@/styles/pages/Cart/CartList.module.scss';

import { InputCheckbox } from '@/components';

import downArrow from '@/assets/img-down-arrow.svg';
import refrigerator from '@/assets/img-refrigerated-food.svg';
import frozen from '@/assets/img-frozen-food.svg';
import roomTemp from '@/assets/img-roomTemp-food.svg';
import CartAccordion from './CartAccordion';

function Radio() {
  return (
    <div className={classes.radio}>
      <div className={classes.frame40}>
        <InputCheckbox />
        <span>전체선택 (3/3)</span>
        <div className={classes.bar}></div>
        <span>선택삭제</span>
      </div>
    </div>
  );
}

export default function CartList() {
  return (
    <div className={classes.cartList}>
      <Radio />
      <ul className={classes.accordion}>
        <li className={classes.cartAccordion}>
          <CartAccordion type="refrigerator" state="true" />
        </li>
        <li className={classes.cartAccordion}>
          <CartAccordion type="frozen" />
        </li>
        <li className={classes.cartAccordion}>
          <CartAccordion type="roomTemp" />
        </li>
      </ul>
      <Radio />
    </div>
  );
}
