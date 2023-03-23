import React from 'react';

// components
import { InputCheckbox } from '@/components';

// styles
import styles from '@/styles/components/List/Accordion.module.scss';

// img
import dropdown from '@/assets/Drop-down.svg';

export const Accordion = () => {
  return (
    <nav style={{ width: '240px', marginRight: '47px' }}>
      <div className={styles.filterTitle}>
        <h4>필터</h4>
        <button type="reset">초기화</button>
      </div>

      <ul>
        <div className={styles.filterTitle}>
          <h5>카테고리</h5>
          <button type="button">
            <img src={dropdown} />
          </button>
        </div>
        <li className={styles.checkWrapper}>
          <InputCheckbox style={{ marginRight: '8px' }} label="샐러드∙간편식" />
          <span>0</span>
        </li>
        <li className={styles.checkWrapper}>
          <InputCheckbox
            style={{ marginRight: '8px' }}
            label="국∙반찬∙메인요리"
          />
          <span>0</span>
        </li>
        <li className={styles.checkWrapper}>
          <InputCheckbox style={{ marginRight: '8px' }} label="정육∙계란" />
          <span>0</span>
        </li>
        <li className={styles.checkWrapper}>
          <InputCheckbox style={{ marginRight: '8px' }} label="과일∙견과∙쌀" />
          <span>0</span>
        </li>
        <li className={styles.checkWrapper}>
          <InputCheckbox style={{ marginRight: '8px' }} label="간식∙과자∙떡" />
          <span>0</span>
        </li>
        <li className={styles.checkWrapper}>
          <InputCheckbox
            style={{ marginRight: '8px' }}
            label="수산∙해산∙건어물"
          />
          <span>0</span>
        </li>
        <li className={styles.checkWrapper}>
          <InputCheckbox
            style={{ marginRight: '8px' }}
            label="생수∙음료∙우유∙커피"
          />
          <span>0</span>
        </li>
        <li className={styles.checkWrapper}>
          <InputCheckbox
            style={{ marginRight: '8px' }}
            label="베이커리∙치즈∙델리"
          />
          <span>0</span>
        </li>
        <li className={styles.checkWrapper}>
          <InputCheckbox
            style={{ marginRight: '8px' }}
            label="생활용품∙리빙∙캠핑"
          />
          <span>0</span>
        </li>
      </ul>

      <ul>
        <div>
          <h5 className={styles.filterTitle}>브랜드</h5>
          <button type="button">
            <img src={dropdown} />
          </button>
        </div>
      </ul>

      <ul>
        <h5 className={styles.filterTitle}>가격</h5>
      </ul>

      <ul>
        <h5 className={styles.filterTitle}>혜택</h5>
      </ul>

      <ul>
        <h5 className={styles.filterTitle}>유형</h5>
      </ul>

      <ul>
        <h5 className={styles.filterTitle}>특정상품 제외</h5>
      </ul>
    </nav>
  );
};
