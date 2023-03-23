import React from 'react';

// img
import question from '@/assets/question.svg';

// style
import styles from '@/styles/totalNumber.module.scss';

export const TotalNFilter = ({ totalNum }) => {
  const [hide, setHide] = React.useState(true);

  return (
    <div
      className={styles.wrapper}
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <span>총{totalNum}건</span>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ul style={{ display: 'flex' }}>
          <li className={styles.productFilter}>
            <a href="#" className={styles.productFilter}>
              추천순
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  style={{ marginLeft: '4px' }}
                  src={question}
                  alt="추천순 상세 설명"
                  onMouseOver={() => setHide(false)}
                  onMouseOut={() => setHide(true)}
                />
                {hide ? (
                  ''
                ) : (
                  <p className={styles.productTotalInfo}>
                    소비자 인기도(판매량, 판매금액, 조회수 등), 상품
                    <br />
                    출시일, 수요 적합성, 상품 운영상 필요 등을 종합적
                    <br />
                    으로 고려한 순서입니다.
                  </p>
                )}
              </div>
            </a>
          </li>

          <li className={styles.productFilter}>
            <a href="#" className="karly-product-menu__order-li--inactive">
              신상품순
            </a>
          </li>

          <li className={styles.productFilter}>
            <a href="#" className="karly-product-menu__order-li--inactive">
              판매량순
            </a>
          </li>

          <li className={styles.productFilter}>
            <a href="#" className="karly-product-menu__order-li--inactive">
              혜택순
            </a>
          </li>

          <li className={styles.productFilter}>
            <a href="#" className="karly-product-menu__order-li--inactive">
              낮은 가격순
            </a>
          </li>

          <li className={styles.productFilter}>
            <a href="#" className="karly-product-menu__order-li--inactive">
              높은 가격순
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
