import { ReactComponent as Hamburger } from '@/assets/img-hamburger-button.svg';
import CategoryMenu from './CategoryMenu';
import classes from '@/components/Header/nav.module.scss';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { SearchForm, UtilityButtonList } from './SearchBar';
import { NavLink, useParams } from 'react-router-dom';
import classNames from 'classnames';

import wideBalloon from '@/assets/img-bubble-wide.svg';
import Balloon from '@/assets/img-bubble.svg';

// recoil state start
import { recoilProductInfoSelector } from '@/@store/detailPageProductInfo';
import { bubbleDisplayState, isInTheCartState } from '@/@store/bubbleState';
import { useEffect, useLayoutEffect, useState } from 'react';
// recoil state end

export default function Nav(props) {
  const resetVisibleBubble = useResetRecoilState(bubbleDisplayState);
  const isVisibleBubble = useRecoilValue(bubbleDisplayState);
  const isInTheCart = useRecoilValue(isInTheCartState);
  const resetInTheCart = useResetRecoilState(isInTheCartState);
  const params = useParams();
  const [isVis, setVis] = useState(false);
  const contents = useRecoilValue(recoilProductInfoSelector(params.id));

  useLayoutEffect(() => {
    setVis(isVisibleBubble);
  }, [isVisibleBubble]);

  useEffect(() => {
    let timer;

    if (isVis) {
      timer = setTimeout(() => {
        resetVisibleBubble();
        resetInTheCart();
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isVis]);

  const wideStyle = {
    backgroundImage: `url(${wideBalloon})`,
    width: 300,
    height: 114,
  };

  const narrowStyle = {
    backgroundImage: `url(${Balloon})`,
    width: 254,
    height: 114,
  };

  return (
    <nav
      className={`${
        !props.scroll_state ? classes.nomalNavigation : classes.fixedNavigation
      } `}
    >
      <div className={classes.navigation}>
        <button type="button" className={classes.categoryButton}>
          <span>{<Hamburger />}카테고리</span>
          {<CategoryMenu style={{ zIndex: '20000' }} />}
        </button>

        <NavList className={classes.navList} />

        {!props.scroll_state ? (
          <button type="button" className={classes.dawnShippingInfo}>
            <span>샛별・낮</span>
            <span>배송안내</span>
          </button>
        ) : (
          <>
            <SearchForm className={classes.searchForm} />
            <UtilityButtonList className={classes.utilityButtonList} />
          </>
        )}

        <div
          className={classNames(
            classes.balloon,
            isVis ? classes.isVisible : null
          )}
          style={
            (props.scroll_state ? { top: 54 } : null,
            isInTheCart ? wideStyle : narrowStyle)
          }
        >
          <img
            src={contents?.image.thumbnail}
            alt={contents?.image.alt}
            className={classes.productImg}
          />
          <div className={classNames(classes.messageWrapper)}>
            <p className={classes.productName}>{contents?.productName}</p>
            <p className={classes.message}>장바구니에 상품을 담았습니다.</p>
            <p
              className={classes.message}
              style={isInTheCart ? { display: 'inline' } : { display: 'none' }}
            >
              이미 담은 상품의 수량을 추가했습니다.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function NavList({ ...rest }) {
  return (
    <li {...rest}>
      <ul>
        <NavLink>
          <span>신상품</span>
        </NavLink>
      </ul>

      <ul>
        <NavLink
          to="/list"
          className={({ isActive }) => (isActive ? classes.active : '')}
        >
          <span>베스트</span>
        </NavLink>
      </ul>
      <ul>
        <NavLink>
          <span>알뜰쇼핑</span>
        </NavLink>
      </ul>
      <ul>
        <NavLink>
          <span>특가/혜택</span>
        </NavLink>
      </ul>
    </li>
  );
}
