import classes from '@/styles/pages/Cart/CartAccordion.module.scss';

import downArrow from '@/assets/img-down-arrow.svg';
import cancel from '@/assets/img-cancel.svg';
import refrigerator from '@/assets/img-refrigerated-food.svg';
import frozen from '@/assets/img-frozen-food.svg';
import roomTemp from '@/assets/img-roomTemp-food.svg';

import galbitang from '@/assets/img-galbitang.png';

import { InputCheckbox } from '@/components';
import Counter from '@/components/Counter/Counter';

function CartStatus({ type }) {
  return (
    <div className={classes.inner}>
      {type === 'refrigerator' ? (
        <>
          <div className={classes.icon}>
            <img src={refrigerator} alt="냉장 식품" className={classes.logo} />
            <span className={classes.text}>냉장 식품</span>
          </div>
          <button type="button" className={classes.arrow}>
            <img src={downArrow} alt="더보기" />
          </button>
        </>
      ) : type === 'frozen' ? (
        <>
          <div className={classes.icon}>
            <img src={frozen} alt="냉동 식품" className={classes.logo} />
            <span className={classes.text}>냉동 식품</span>
          </div>
          <button type="button" className={classes.arrow}>
            <img src={downArrow} alt="더보기" />
          </button>
        </>
      ) : type === 'roomTemp' ? (
        <>
          <div className={classes.icon}>
            <img src={roomTemp} alt="실온 식품" className={classes.logo} />
            <span className={classes.text}>실온 식품</span>
          </div>
          <button type="button" className={classes.arrow}>
            <img src={downArrow} alt="더보기" />
          </button>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default function CartAccordion(props) {
  const { type, state = false, ...restProps } = props;

  return (
    <div className={classes.cartAccordion}>
      <CartStatus type={type} />
      {state ? (
        <div className={classes.detail}>
          <div className={classes.product}>
            <InputCheckbox />
            <img className={classes.image} src={galbitang} alt="제품사진" />
            <div className={classes.desc}>
              <span className={classes.text}>[사미헌] 갈비탕</span>
            </div>
            <Counter />
            <div className={classes.price}>
              <span className={classes.text}>12,000원</span>
            </div>
            <button type="button" className={classes.icon}>
              <img className={classes.cancel} src={cancel} alt="취소" />
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
