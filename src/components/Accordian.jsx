import React from 'react';

// components
import { InputCheckbox } from '@/components';

export const Accordian = () => {
  return (
    <>
      <ul>
        <h5>필터</h5>
        <li>
          <InputCheckbox
            style={{ width: '12px', height: '12px' }}
            label="샐러드∙간편식"
          />{' '}
          <span>0</span>
        </li>
        <li>
          <InputCheckbox
            style={{ width: '12px', height: '12px' }}
            label="국∙반찬∙메인요리"
          />{' '}
          <span>0</span>
        </li>
        <li>
          <InputCheckbox
            style={{ width: '12px', height: '12px' }}
            label="정육∙계란"
          />{' '}
          <span>0</span>
        </li>
        <li>
          <InputCheckbox
            style={{ width: '12px', height: '12px' }}
            label="과일∙견과∙쌀"
          />{' '}
          <span>0</span>
        </li>
        <li>
          <InputCheckbox
            style={{ width: '12px', height: '12px' }}
            label="간식∙과자∙떡"
          />{' '}
          <span>0</span>
        </li>
        <li>
          <InputCheckbox
            style={{ width: '12px', height: '12px' }}
            label="수산∙해산∙건어물"
          />{' '}
          <span>0</span>
        </li>
        <li>
          <InputCheckbox
            style={{ width: '12px', height: '12px' }}
            label="생수∙음료∙우유∙커피"
          />{' '}
          <span>0</span>
        </li>
        <li>
          <InputCheckbox
            style={{ width: '12px', height: '12px' }}
            label="베이커리∙치즈∙델리"
          />{' '}
          <span>0</span>
        </li>
        <li>
          <InputCheckbox
            style={{ width: '12px', height: '12px' }}
            label="생활용품∙리빙∙캠핑"
          />{' '}
          <span>0</span>
        </li>
      </ul>

      <ul>
        <h5>카테고리</h5>
      </ul>

      <ul>
        <h5>브랜드</h5>
      </ul>

      <ul>
        <h5>가격</h5>
      </ul>

      <ul>
        <h5>혜택</h5>
      </ul>

      <ul>
        <h5>유형</h5>
      </ul>

      <ul>
        <h5>특정상품 제외</h5>
      </ul>
    </>
  );
};
