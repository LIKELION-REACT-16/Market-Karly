import classes from '@/styles/pages/Cart/CartList.module.scss';

import { InputCheckbox } from '@/components';

import downArrow from '@/assets/img-down-arrow.svg';
import refrigerator from '@/assets/img-refrigerated-food.svg';
import frozen from '@/assets/img-frozen-food.svg';
import roomTemp from '@/assets/img-roomTemp-food.svg';

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
          <div className={classes.inner}>
            <div className={classes.icon}>
              <img src={refrigerator} alt="냉장 식품" className="logo" />
              <span className="text">냉장 식품</span>
            </div>
            <button type="button">
              <img src={downArrow} alt="더보기" />
            </button>
          </div>
        </li>
        <li className={classes.cartAccordion}>
          <div className={classes.inner}>
            <div className={classes.icon}>
              <img src={frozen} alt="냉동 식품" />
              <span>냉동 식품</span>
            </div>
            <button type="button">
              <img src={downArrow} alt="더보기" />
            </button>
          </div>
        </li>
        <li className={classes.cartAccordion}>
          <div className={classes.inner}>
            <div className={classes.icon}>
              <img src={roomTemp} alt="상온 식품" className="logo" />
              <span className="text">상온 식품</span>
            </div>
            <button type="button">
              <img src={downArrow} alt="더보기" />
            </button>
          </div>
        </li>
      </ul>
      <Radio />
    </div>
  );
}
