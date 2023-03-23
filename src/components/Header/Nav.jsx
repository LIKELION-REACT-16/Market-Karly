import { useState, useEffect, useRef } from 'react';
import { ReactComponent as Hamburger } from '@/assets/img-hamburger-button.svg';
import CategoryMenu from './CategoryMenu';
import classes from '@/components/Header/nav.module.scss';

import { SearchForm, UtilityButtonList } from './SearchBar';

export default function Nav(props) {
  return (
    <nav
      className={`${
        !props.scroll_state ? classes.nomalNavigation : classes.fixedNavigation
      } `}
    >
      <div className={classes.navigation}>
        <button type="button" className={classes.categoryButton}>
          <span>{<Hamburger />}카테고리</span>
          {<CategoryMenu />}
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
      </div>
    </nav>
  );
}

export function NavList({ ...rest }) {
  return (
    <li {...rest}>
      <ul>
        <button type="button">
          <span>신상품</span>
        </button>
      </ul>
      <ul>
        <button type="button">
          <span>베스트</span>
        </button>
      </ul>
      <ul>
        <button type="button">
          <span>알뜰쇼핑</span>
        </button>
      </ul>
      <ul>
        <button type="button">
          <span>특가/혜택</span>
        </button>
      </ul>
    </li>
  );
}
