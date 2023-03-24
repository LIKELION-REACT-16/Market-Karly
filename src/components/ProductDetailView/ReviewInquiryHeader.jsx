import classes from '@/components/ProductDetailView/ProductDetailView.module.scss';
import { useRef } from 'react';
import { NormalButton } from '../Button';
import ModalForm from '../ModalForm/ModalForm';
// import { ReviewInquiryHeaderFrame } from './ReviewInquiryHeaderFrame';

export function ReviewInquiryHeader({ type }) {
  const reviewModalRef = useRef();
  const inquiryModalRef = useRef();

  return (
    <div className={classes.ReviewInquiryHeader}>
      <ReviewInquiryHeaderFrame type={type} />
      {/* <NormalButton width="155" height="44">
        <span>{type === 'review' ? '후기 작성하기' : '문의하기'}</span>
      </NormalButton> */}
      <button
        onClick={() => {
          if (type === 'review') {
            reviewModalRef.current.showModal();
          } else if (type === 'inquiry') {
            inquiryModalRef.current.showModal();
          }
        }}
      >
        {type === 'review' ? '후기 작성하기' : '문의하기'}
      </button>
      <ModalForm ref={reviewModalRef} type="review"></ModalForm>
      <ModalForm ref={inquiryModalRef} type="inquiry"></ModalForm>
    </div>
  );
}

function ReviewInquiryHeaderFrame({ type }) {
  return type === 'review' ? (
    <div className={classes.ReviewInquiryHeaderFrame}>
      <h3>상품후기</h3>
      <p>글후기 50원 적립금 혜택이 있어요.</p>
      <ul>
        <li>
          퍼플, 더퍼플은 2배 적립 (100원) / 주간 베스트 후기로 선정 시 5,000원
          추가 적립
        </li>
        <li>후기 작성은 배송완료일로부터 30일 이내 가능합니다.</li>
        <li>
          작성하신 후기는 확인 후 적립금이 지급됩니다. (영업일 기준 평균 1~2일
          소요)
        </li>
      </ul>
    </div>
  ) : type === 'inquiry' ? (
    <div className={classes.ReviewInquiryHeaderFrame}>
      <h3>상품문의</h3>
      <ul>
        <li>
          상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은
          사전동의 없이 담당 게시판으로 이동될 수 있습니다.
        </li>
        <li>
          배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내 1:1
          문의에 남겨주세요.
        </li>
      </ul>
    </div>
  ) : null;
}
