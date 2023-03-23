import classNames from 'classnames';
import classes from '@/components/ProductNav/productNav.module.scss';
import { useState, useEffect, useCallback } from 'react';

export default function ProductNav({
  activeAnchor,
  className = null,
  ...rest
}) {
  // const [activeAnchor, setActive] = useState(1);

  // const navClickHandle = (e) => {
  //   let selectedAnchor;

  //   if (e.target.tagName === 'LI') return;

  //   if (e.target.tagName === 'A') {
  //     selectedAnchor = e.target.getAttribute('data-index');
  //   } else if (e.target.tagName === 'SPAN') {
  //     selectedAnchor = e.target.closest('a').getAttribute('data-index');
  //   }

  //   setActive(parseInt(selectedAnchor));
  // };

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
        <a
          data-index={1}
          style={activeAnchor === 1 ? activeStyle : null}
          href="#description"
        >
          <span>상품설명</span>
        </a>
      </li>
      <li>
        <a
          style={activeAnchor === 2 ? activeStyle : null}
          data-index={2}
          href="#detailInformation"
        >
          <span>상세정보</span>
        </a>
      </li>
      <li>
        <a
          style={activeAnchor === 3 ? activeStyle : null}
          data-index={3}
          href="#review"
        >
          <span>후기 (1,000)</span>
        </a>
      </li>
      <li>
        <a
          style={activeAnchor === 4 ? activeStyle : null}
          data-index={4}
          href="#inquiry"
        >
          <span>문의</span>
        </a>
      </li>
    </ul>
  );
}
