import classes from '@/styles/pages/Cart/CartList.module.scss';

import { useId, useState } from 'react';
import classNames from 'classnames';

import downArrow from '@/assets/img-down-arrow.svg';
import refrigeratorImg from '@/assets/img-refrigerated-food.svg';
import frozenImg from '@/assets/img-frozen-food.svg';
import roomTempImg from '@/assets/img-roomTemp-food.svg';
import cancelImg from '@/assets/img-cancel.svg';

import dummy from './data.json';
import Counter from '@/components/Counter/Counter';

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

  const [checkItems, setCheckItems] = useState([]);
  const [moreItems, setMoreItems] = useState(true);

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      cart.forEach((item) => idArray.push(item.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const handleMoreProduct = () => {
    setMoreItems((prev) => !prev);
  };

  const refrigerator = cart.filter((cart) => cart.type === 'refrigerator');
  const frozen = cart.filter((cart) => cart.type === 'frozen');
  const roomTemp = cart.filter((cart) => cart.type === 'roomTemp');

  return (
    <div className={classes.cartList}>
      {/* Radio */}
      <div className={classes.radio}>
        <div className={classes.checkbox}>
          <input
            type={type}
            id="selectAllTop"
            name="select-all"
            className={classes.input}
            onChange={(e) => handleAllCheck(e.target.checked)}
            checked={checkItems.length === cart.length}
          />
          <label htmlFor="selectAllTop" className={classes.label}></label>
        </div>
        <span className={classes.all}>
          전체선택 ({checkItems.length}/{cart.length})
        </span>
        <div className={classes.bar}></div>
        <span className={classes.delete}>선택삭제</span>
      </div>
      {/* AddCart */}
      <ul className={classes.accordions}>
        <li className={classes.accordion}>
          {refrigerator.length > 0 ? (
            <div className={classes.inner}>
              <div className={classes.icon}>
                <img
                  src={refrigeratorImg}
                  alt="냉장 식품"
                  className={classes.logo}
                />
                <span className={classes.text}>냉장 식품</span>
              </div>
              <button
                type="button"
                className={classes.arrow}
                onClick={(e) => handleMoreProduct(e.target)}
              >
                <img
                  src={downArrow}
                  alt="더보기"
                  className={classes.arrowImg}
                />
              </button>
            </div>
          ) : (
            ''
          )}
          {moreItems ? (
            ''
          ) : (
            <ul className={classes.detail}>
              {refrigerator.length > 0
                ? refrigerator.map((cart) => (
                    <li key={`select-${cart.id}`} className={classes.product}>
                      <div className={classes.checkbox}>
                        <input
                          id={`select-${cart.id}`}
                          type={type}
                          name={`select-${cart.id}`}
                          className={classes.input}
                          onChange={(e) =>
                            handleSingleCheck(e.target.checked, cart.id)
                          }
                          checked={checkItems.includes(cart.id)}
                        />
                        <label
                          htmlFor={`select-${cart.id}`}
                          className={classes.label}
                        ></label>
                      </div>
                      <img
                        src={cart.img}
                        alt={cart.name}
                        className={classes.image}
                      />
                      <div className={classes.desc}>
                        <span className={classes.text}>{cart.name}</span>
                      </div>
                      <Counter />
                      <div className={classes.price}>
                        <span className={classes.text}>
                          {cart.price.toLocaleString()}원
                        </span>
                      </div>
                      <button type="button" className={classes.cancel}>
                        <img src={cancelImg} alt="취소" />
                      </button>
                    </li>
                  ))
                : ''}
            </ul>
          )}
        </li>
        <li className={classes.accordion}>
          {frozen.length > 0 ? (
            <div className={classes.inner}>
              <div className={classes.icon}>
                <img src={frozenImg} alt="냉동 식품" className={classes.logo} />
                <span className={classes.text}>냉동 식품</span>
              </div>
              <button
                type="button"
                className={classes.arrow}
                onClick={handleMoreProduct}
              >
                <img
                  src={downArrow}
                  alt="더보기"
                  className={classes.arrowImg}
                />
              </button>
            </div>
          ) : (
            ''
          )}
          {moreItems ? (
            ''
          ) : (
            <ul className={classes.detail}>
              {frozen.length > 0
                ? frozen.map((cart) => (
                    <li key={`select-${cart.id}`} className={classes.product}>
                      <div className={classes.checkbox}>
                        <input
                          id={`select-${cart.id}`}
                          type={type}
                          name={`select-${cart.id}`}
                          className={classes.input}
                          onChange={(e) =>
                            handleSingleCheck(e.target.checked, cart.id)
                          }
                          checked={checkItems.includes(cart.id)}
                        />
                        <label
                          htmlFor={`select-${cart.id}`}
                          className={classes.label}
                        ></label>
                      </div>
                      <img
                        src={cart.img}
                        alt={cart.name}
                        className={classes.image}
                      />
                      <div className={classes.desc}>
                        <span className={classes.text}>{cart.name}</span>
                      </div>
                      <Counter />
                      <div className={classes.price}>
                        <span className={classes.text}>
                          {cart.price.toLocaleString()}원
                        </span>
                      </div>
                      <button type="button" className={classes.cancel}>
                        <img src={cancelImg} alt="취소" />
                      </button>
                    </li>
                  ))
                : ''}
            </ul>
          )}
        </li>
        <li className={classes.accordion}>
          {roomTemp.length > 0 ? (
            <div className={classes.inner}>
              <div className={classes.icon}>
                <img
                  src={roomTempImg}
                  alt="상온 식품"
                  className={classes.logo}
                />
                <span className={classes.text}>상온 식품</span>
              </div>
              <button
                type="button"
                className={classes.arrow}
                onClick={handleMoreProduct}
              >
                <img
                  src={downArrow}
                  alt="더보기"
                  className={classes.arrowImg}
                />
              </button>
            </div>
          ) : (
            ''
          )}
          {moreItems ? (
            ''
          ) : (
            <ul className={classes.detail}>
              {roomTemp.length > 0
                ? roomTemp.map((cart) => (
                    <li key={`select-${cart.id}`} className={classes.product}>
                      <div className={classes.checkbox}>
                        <input
                          id={`select-${cart.id}`}
                          type={type}
                          name={`select-${cart.id}`}
                          className={classes.input}
                          onChange={(e) =>
                            handleSingleCheck(e.target.checked, cart.id)
                          }
                          checked={checkItems.includes(cart.id)}
                        />
                        <label
                          htmlFor={`select-${cart.id}`}
                          className={classes.label}
                        ></label>
                      </div>
                      <img
                        src={cart.img}
                        alt={cart.name}
                        className={classes.image}
                      />
                      <div className={classes.desc}>
                        <span className={classes.text}>{cart.name}</span>
                      </div>
                      <Counter />
                      <div className={classes.price}>
                        <span className={classes.text}>
                          {cart.price.toLocaleString()}원
                        </span>
                      </div>
                      <button type="button" className={classes.cancel}>
                        <img src={cancelImg} alt="취소" />
                      </button>
                    </li>
                  ))
                : ''}
            </ul>
          )}
        </li>
      </ul>
      {/* Radio */}
      <div className={classes.radio}>
        <div className={classes.checkbox}>
          <input
            type={type}
            id="selectAllTop"
            name="select-all"
            className={classes.input}
            onChange={(e) => handleAllCheck(e.target.checked)}
            checked={checkItems.length === cart.length}
          />
          <label htmlFor="selectAllTop" className={classes.label}></label>
        </div>
        <span className={classes.all}>
          전체선택 ({checkItems.length}/{cart.length})
        </span>
        <div className={classes.bar}></div>
        <span className={classes.delete}>선택삭제</span>
      </div>
    </div>
  );
}
