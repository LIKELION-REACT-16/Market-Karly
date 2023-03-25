import React from 'react';

// img
import question from '@/assets/question.svg';

// style
import styles from '@/styles/components/List/totalNumber.module.scss';

export const TotalNFilter = ({ totalNum }) => {
  const [hide, setHide] = React.useState(true);
  const [selectTab, setSelectTab] = React.useState(0);

  return (
    <div className={styles.wrapper}>
      <span>총{totalNum}건</span>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ul className={styles.productFilterWrapper} role="tablist">
          <li className={styles.productFilter}>
            <a
              onClick={() => {
                setSelectTab(0);
              }}
              href="#"
              className={
                selectTab === 0
                  ? styles.productFilterSelect
                  : styles.productFilterNoneSelect
              }
            >
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
            <a
              onClick={() => {
                setSelectTab(1);
              }}
              href="#"
              className={
                selectTab === 1
                  ? styles.productFilterSelect
                  : styles.productFilterNoneSelect
              }
            >
              신상품순
            </a>
          </li>

          <li className={styles.productFilter}>
            <a
              onClick={() => {
                setSelectTab(2);
              }}
              href="#"
              className={
                selectTab === 2
                  ? styles.productFilterSelect
                  : styles.productFilterNoneSelect
              }
            >
              판매량순
            </a>
          </li>

          <li className={styles.productFilter}>
            <a
              onClick={() => {
                setSelectTab(3);
              }}
              href="#"
              className={
                selectTab === 3
                  ? styles.productFilterSelect
                  : styles.productFilterNoneSelect
              }
            >
              혜택순
            </a>
          </li>

          <li className={styles.productFilter}>
            <a
              onClick={() => {
                setSelectTab(4);
              }}
              href="#"
              className={
                selectTab === 4
                  ? styles.productFilterSelect
                  : styles.productFilterNoneSelect
              }
            >
              낮은 가격순
            </a>
          </li>

          <li className={styles.productFilter}>
            <a
              onClick={() => {
                setSelectTab(5);
              }}
              href="#"
              className={
                selectTab === 5
                  ? styles.productFilterSelect
                  : styles.productFilterNoneSelect
              }
            >
              높은 가격순
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
