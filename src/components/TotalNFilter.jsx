import React from 'react';

// style
import styles from '@/styles/totalNumber.module.scss';

export const TotalNFilter = ({ totalNum }) => {
  return (
    <div
      className={styles.wrapper}
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <span>총{totalNum}건</span>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ul className={styles.productFilter}>
          <li class="karly-product-menu__order-li">
            <a href="#" class="karly-product-menu__order-li--active">
              추천순
            </a>
            <div className="productTotalInfo">
              <img
                src="/client/assets/img/product_list/rank_qestion.svg"
                alt=""
              />
              <div className="productTotalInfo">
                소비자 인기도(판매량, 판매금액, 조회수 등), 상품 출시일, 수요
                적합성, 상품 운영상 필요 등을 종합적으로 고려한 순서입니다.
              </div>
            </div>
          </li>
          <li className="productFilter">
            <a
              href="javascript:void(0);"
              class="karly-product-menu__order-li--inactive"
            >
              신상품순
            </a>
          </li>
          <li className="productFilter">
            <a
              href="javascript:void(0);"
              class="karly-product-menu__order-li--inactive"
            >
              판매량순
            </a>
          </li>
          <li className="productFilter">
            <a
              href="javascript:void(0);"
              class="karly-product-menu__order-li--inactive"
            >
              혜택순
            </a>
          </li>
          <li className="productFilter">
            <a
              href="javascript:void(0);"
              class="karly-product-menu__order-li--inactive"
            >
              낮은 가격순
            </a>
          </li>
          <li className="productFilter">
            <a
              href="javascript:void(0);"
              class="karly-product-menu__order-li--inactive"
            >
              높은 가격순
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
