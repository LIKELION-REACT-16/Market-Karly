import classNames from 'classnames';
import classes from '@/components/ProductNav/productNav.module.scss';
import { HashLink } from 'react-router-hash-link';

export default function ProductNav({
  activeAnchor,
  className = null,
  ...rest
}) {
  const activeStyle = {
    backgroundColor: 'white',
    borderBottom: 'none',
    color: '#5f0080',
  };

  return (
    <ul
      className={classNames(className, classes.productNav)}
      // onClick={navClickHandle}
    >
      <li>
        <HashLink
          smooth
          to="#description"
          data-index={1}
          style={activeAnchor === 1 ? activeStyle : null}
          href="#description"
        >
          <span>상품설명</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="#detailInformation"
          style={activeAnchor === 2 ? activeStyle : null}
          data-index={2}
        >
          <span>상세정보</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="#review"
          style={activeAnchor === 3 ? activeStyle : null}
          data-index={3}
        >
          <span>후기 (1,000)</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="#inquiry"
          style={activeAnchor === 4 ? activeStyle : null}
          data-index={4}
        >
          <span>문의</span>
        </HashLink>
      </li>
    </ul>
  );
}
