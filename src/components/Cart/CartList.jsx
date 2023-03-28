import classes from '@/styles/pages/Cart/CartList.module.scss';

import { useEffect, useId, useState } from 'react';

import { dbService } from '@/routes/fbase';
import { getDocs, collection } from 'firebase/firestore';

import downArrow from '@/assets/img-down-arrow.svg';
import refrigeratorImg from '@/assets/img-refrigerated-food.svg';
import frozenImg from '@/assets/img-frozen-food.svg';
import roomTempImg from '@/assets/img-roomTemp-food.svg';
import cancelImg from '@/assets/img-cancel.svg';

import Counter from '@/components/Counter/Counter';

export default function CartList({
  checked = false,
  type = 'checkbox',
  ...restProps
}) {
  const id = useId();

  /* -------------------------------------------------------------------------- */
  /*                                     fb                                     */
  /* -------------------------------------------------------------------------- */
  const [productList, setProductsList] = useState([]);
  const productCollection = collection(dbService, 'products');

  useEffect(() => {
    const getProductList = async () => {
      try {
        const data = await getDocs(productCollection);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setProductsList(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getProductList();
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                   session                                  */
  /* -------------------------------------------------------------------------- */
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    let getCart = sessionStorage.getItem('cart');

    if (getCart == null) {
      getCart = [];
    } else {
      getCart = JSON.parse(getCart);
      setCartList(getCart);
    }
  }, []);

  const cartId = cartList.map((cart) => cart.productId);

  const cartProduct = productList.filter((product) =>
    cartId.includes(product.id)
  );

  /* -------------------------------------------------------------------------- */
  /*                                   filter                                   */
  /* -------------------------------------------------------------------------- */
  const refrigerator = cartProduct.filter(
    (product) => product.type === 'refrigerator'
  );
  const frozen = cartProduct.filter((product) => product.type === 'frozen');
  const roomTemp = cartProduct.filter((product) => product.type === 'roomTemp');

  /* -------------------------------------------------------------------------- */
  /*                                  checkbox                                  */
  /* -------------------------------------------------------------------------- */
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
      cartProduct.forEach((item) => idArray.push(item.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const handleMoreProduct = () => {
    setMoreItems((prev) => !prev);
  };

  /* -------------------------------------------------------------------------- */
  /*                                   counter                                  */
  /* -------------------------------------------------------------------------- */
  const [refriCount, setRefriCount] = useState([]);
  const [frozenCount, setFrozenCount] = useState([]);
  const [roomCount, setRoomCount] = useState([]);

  useEffect(() => {
    setRefriCount(refriCount);
  }, [refriCount]);
  useEffect(() => {
    setFrozenCount(frozenCount);
  }, [frozenCount]);
  useEffect(() => {
    setRoomCount(roomCount);
  }, [roomCount]);

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
            checked={checkItems.length === cartProduct.length}
          />
          <label htmlFor="selectAllTop" className={classes.label}></label>
        </div>
        <span className={classes.all}>
          전체선택 ({checkItems.length}/{cartProduct.length})
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
                        src={cart.image.thumbnail}
                        alt={cart.image.alt}
                        className={classes.image}
                      />
                      <div className={classes.desc}>
                        <span className={classes.text}>{cart.productName}</span>
                      </div>
                      <Counter setParentState={setRefriCount} />
                      <div className={classes.price}>
                        <span className={classes.text}>
                          {(cart.salePrice === 0
                            ? refriCount * cart.price
                            : refriCount * cart.salePrice
                          ).toLocaleString()}
                          원
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
                        src={cart.image.thumbnail}
                        alt={cart.image.alt}
                        className={classes.image}
                      />
                      <div className={classes.desc}>
                        <span className={classes.text}>{cart.productName}</span>
                      </div>
                      <Counter setParentState={setFrozenCount} />
                      <div className={classes.price}>
                        <span className={classes.text}>
                          {(cart.salePrice === 0
                            ? frozenCount * cart.price
                            : frozenCount * cart.salePrice
                          ).toLocaleString()}
                          원
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
                        src={cart.image.thumbnail}
                        alt={cart.image.alt}
                        className={classes.image}
                      />
                      <div className={classes.desc}>
                        <span className={classes.text}>{cart.productName}</span>
                      </div>
                      <Counter setParentState={setRoomCount} />
                      <div className={classes.price}>
                        <span className={classes.text}>
                          {(cart.salePrice === 0
                            ? roomCount * cart.price
                            : roomCount * cart.salePrice
                          ).toLocaleString()}
                          원
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
            checked={checkItems.length === cartProduct.length}
          />
          <label htmlFor="selectAllTop" className={classes.label}></label>
        </div>
        <span className={classes.all}>
          전체선택 ({checkItems.length}/{cartProduct.length})
        </span>
        <div className={classes.bar}></div>
        <span className={classes.delete}>선택삭제</span>
      </div>
    </div>
  );
}
