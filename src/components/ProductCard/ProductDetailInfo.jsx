import classes from '@/components/ProductCard/productDetailInfo.module.scss';
import Counter from '@/components/Counter/Counter';
import { useState } from 'react';
import { ReactComponent as Like } from '@/assets/img-icon-heart-purple.svg';
import { ReactComponent as Alert } from '@/assets/img-icon-alert.svg';
import { ReactComponent as AlertDisabled } from '@/assets/img-icon-alert-disable.svg';
import { totalPriceSelector } from '@/@store/totalPriceSelector.js';

import {
  productID,
  productTitleState,
  productPrice,
  productQuantity,
} from '@/@store/detailCardState';
import { useRecoilValue, useRecoilState } from 'recoil';

export default function ProductDetailInfo() {
  const productTitle = useRecoilValue(productTitleState);
  const price = useRecoilValue(productPrice);
  const [quantity, setQuantity] = useRecoilState(productQuantity);

  return (
    <ul className={classes.infoList}>
      <DetailInfo title="배송">
        <span>샛별배송</span>
        <p>23시 전 주문 시 내일 아침 7시 전 도착</p>
        <p>(대구 부산 울산 샛별배송 운영시간 별도 확인)</p>
      </DetailInfo>
      <DetailInfo title="판매자">
        <span>칼리</span>
      </DetailInfo>
      <DetailInfo title="포장타입">
        <span>상온 (종이포장)</span>
        <p>택배배송은 에코 포장이 스티로폼으로 대체됩니다.</p>
      </DetailInfo>
      <DetailInfo title="판매단위">
        <span>1봉</span>
      </DetailInfo>
      <DetailInfo title="중량/용량">
        <span>123g*4봉</span>
      </DetailInfo>
      <DetailInfo title="원산지">
        <span>상세페이지 별도표기</span>
      </DetailInfo>
      <DetailInfo title="알레르기정보">
        <p>-대두, 밀, 쇠고기 함유</p>
        <p>
          -계란, 우유, 메밀, 땅콩, 고등어, 게, 돼지고기, 새우, 복숭아, 토마토,
          아황산류, 호두, 잣, 닭고기, 오징어, 조개류(굴, 전복, 홍합 포함)를
          사용한 제품과 같은 제조시설에서 제조
        </p>
      </DetailInfo>
      <DetailInfo title="상품선택">
        <div className={classes.productCounter}>
          <p>{productTitle}</p>
          <Counter className={classes.count} setParentState={setQuantity} />
          <span className={classes.productPrice}>
            {price.toLocaleString('ko-KR')}원
          </span>
        </div>
      </DetailInfo>
      <PriceAndPointWrapper />
      <ProductCardButtonList className={classes.buttonList} />
    </ul>
  );
}

function ProductCardButtonList({ className }) {
  const [likeButtonState, setLikeButtonState] = useState(true);
  const prodID = useRecoilValue(productID);
  const quantity = useRecoilValue(productQuantity);

  const handler = () => {
    console.log(prodID, quantity);
  };

  return (
    <div className={className}>
      <button type="button" aria-label="상품 찜 버튼">
        <Like />
      </button>
      <button
        type="button"
        aria-label="상품 찜 버튼"
        disabled={likeButtonState}
      >
        {likeButtonState ? <AlertDisabled /> : <Alert />}
      </button>
      <button className={classes.cartButton} onClick={handler}>
        장바구니 담기
      </button>
    </div>
  );
}

function DetailInfo({ title, children }) {
  return (
    <li className={classes.infoListItem}>
      <span className={classes.title}>{title}</span>
      <div className={classes.subtitle}>{children}</div>
    </li>
  );
}

function PriceAndPointWrapper() {
  const totalPrice = useRecoilValue(totalPriceSelector);

  return (
    <div className={classes.priceAndPointWrapper}>
      <p className={classes.totalPrice}>
        총 상품 금액:<span>{totalPrice.toLocaleString('ko-KR')}</span>원
      </p>

      <div className={classes.pointInfo}>
        <div className={classes.pointBadge}>적립</div>
        <p>로그인 후 적립 혜택 제공</p>
      </div>
    </div>
  );
}
