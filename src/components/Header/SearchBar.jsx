import { Link } from 'react-router-dom';
import { ReactComponent as KarlyLogo } from '@/assets/img-logo-karly.svg';
import { ReactComponent as Location } from '@/assets/img-icon-location.svg';
import { ReactComponent as Heart } from '@/assets/img-icon-heart.svg';
import { ReactComponent as Cart } from '@/assets/img-icon-cart.svg';
import { ReactComponent as New } from '@/assets/img-new.svg';
import { ReactComponent as Search } from '@/assets/img-icon-search.svg';
import classes from '@/components/Header/searchBar.module.scss';

//recoil state start
import { cartProductNum } from '@/@store/cartProductNum';
import { useRecoilValue } from 'recoil';
//recoil state end

export default function SearchBar() {
  return (
    <div className={classes.searchBar}>
      <h1 className={classes.headerLogo}>
        <Link to={'/'}>
          <KarlyLogo />
        </Link>
        <Link to={'/'}>마켓 칼리</Link>
        <Link to={'/'}>
          뷰티 칼리
          <New className={classes.newTag} />
        </Link>
      </h1>

      <SearchForm className={classes.searchForm} />
      <UtilityButtonList className={classes.utilityButtonList} />
    </div>
  );
}

export function SearchForm({ ...rest }) {
  return (
    <form {...rest}>
      <input type="text" placeholder="검색어를 입력해주세요" />
      <button type="submit">
        <Search />
      </button>
    </form>
  );
}

export function UtilityButtonList({ ...rest }) {
  let productAmout = useRecoilValue(cartProductNum);

  return (
    <>
      <span {...rest}>
        <button type="button">
          <Location />
        </button>
        <button type="button">
          <Heart />
        </button>
        <button type="button">
          <div
            style={
              productAmout === 0 ? { display: 'none' } : { display: 'block' }
            }
            className={classes.cartNum}
          >
            {productAmout}
          </div>
          <Link to={'/Cart'}>
            {' '}
            <Cart />
          </Link>
        </button>
      </span>
    </>
  );
}
