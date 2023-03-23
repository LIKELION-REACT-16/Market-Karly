import classes from '@/styles/pages/Cart/CartList.module.scss';

import { InputCheckbox } from '@/components';

import downArrow from '@/assets/img-down-arrow.svg';
import refrigerator from '@/assets/img-refrigerated-food.svg';
import frozen from '@/assets/img-frozen-food.svg';
import roomTemp from '@/assets/img-roomTemp-food.svg';

import CartAccordion from './CartAccordion';
import Radio from './Radio';

import dummy from './data.json';
import { useId, useState } from 'react';
import classNames from 'classnames';

const { cart } = dummy;

export default function CartList({
  checked = false,
  type = 'checkbox',
  invisibleInput = true,
  invisibleLabel = false,
  inline = false,
  vertical = false,
  style,
  labelClasses = [],
  ...restProps
}) {
  const id = useId();
  const combineClassNames = `${classes.control} ${
    inline ? classes.control_inline : ''
  } ${vertical ? classes.control_vertical : ''}`;

  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      cart.forEach((item) => idArray.push(item.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

  return (
    <div className={classes.cartList}>
      {/* Radio */}
      <div className={classes.radio}>
        <label
          htmlFor="selectAllTop"
          className={classNames(combineClassNames)}
        ></label>
        <input
          type={type}
          id="selectAllTop"
          name="select-all"
          className={classes.input}
          onChange={(e) => handleAllCheck(e.target.checked)}
          checked={checkItems.length === cart.length}
        />
        <div className={classes.frame40}>
          <span>전체선택 (0/{cart.length})</span>
          <div className={classes.bar}></div>
          <span>선택삭제</span>
        </div>
      </div>
      {/* AddCart */}
      <ul className={classes.accordion} id={id}>
        {cart.map((cart) => (
          <li key={`select-${cart.id}`}>
            <label htmlFor={`select-${cart.id}`}></label>
            <input
              id={`select-${cart.id}`}
              type={type}
              name={`select-${cart.id}`}
              className={classes.input}
              onChange={(e) => handleSingleCheck(e.target.checked, cart.id)}
              checked={checkItems.includes(cart.id)}
            />
            <span>{cart.id}</span>
            <span>{cart.img}</span>
            <span>{cart.name}</span>
            <span>{cart.type}</span>
            <span>{cart.price}</span>
          </li>
        ))}
      </ul>
      {/* Radio */}
      <div className={classes.radio}>
        <label
          htmlFor="selectAllBot"
          className={classNames(combineClassNames)}
        ></label>
        <input
          type={type}
          id="selectAllBot"
          name="select-all"
          className={classes.input}
          onChange={(e) => handleAllCheck(e.target.checked)}
          checked={checkItems.length === cart.length}
        />
        <div className={classes.frame40}>
          <span>전체선택 (0/{cart.length})</span>
          <div className={classes.bar}></div>
          <span>선택삭제</span>
        </div>
      </div>
    </div>
  );
}
