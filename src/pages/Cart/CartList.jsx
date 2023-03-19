import { InputCheckbox } from '@/components';

import downArrow from '@/assets/img-down-arrow.svg';
import refrigerator from '@/assets/img-refrigerated-food.svg';
import frozen from '@/assets/img-frozen-food.svg';
import roomTemp from '@/assets/img-roomTemp-food.svg';

export default function CartList() {
  return (
    <div className="cartList">
      <div className="radio">
        <div className="frame40">
          <InputCheckbox />
          <span className="text">전체선택 (3/3)</span>
          <div className="bar"></div>
          <span className="text">선택삭제</span>
        </div>
      </div>
      <ul className="accordion">
        <li className="cartAccordion">
          <div className="inner">
            <div className="icon">
              <img src={refrigerator} alt="냉장 식품" className="logo" />
              <span className="text">냉장 식품</span>
            </div>
            <button type="button">
              <img src={downArrow} alt="더보기" />
            </button>
          </div>
        </li>
        <li className="cartAccordion">
          <div className="inner">
            <div className="icon">
              <img src={frozen} alt="냉동 식품" className="logo" />
              <span className="text">냉동 식품</span>
            </div>
            <button type="button">
              <img src={downArrow} alt="더보기" />
            </button>
          </div>
        </li>
        <li className="cartAccordion">
          <div className="inner">
            <div className="icon">
              <img src={roomTemp} alt="상온 식품" className="logo" />
              <span className="text">상온 식품</span>
            </div>
            <button type="button">
              <img src={downArrow} alt="더보기" />
            </button>
          </div>
        </li>
      </ul>
      <div className="radio">
        <div className="frame40">
          <InputCheckbox />
          <span className="text">전체선택 (3/3)</span>
          <div className="bar"></div>
          <span className="text">선택삭제</span>
        </div>
      </div>
    </div>
  );
}
