import classes from '@/components/ProductDetailView/ProductDetailView.module.scss';
import { forwardRef, useEffect, useState } from 'react';
import { Inquiry } from './Inquiry';
import { Review } from './Review';
import { ReviewInquiryHeader } from './ReviewInquiryHeader';

const ProductDetailView = ({ type = 'review', id }, ref) => {
  // type에 따라 데이터를 받아온다.
  const initialArr =
    type === 'review'
      ? [
          // {
          //   id: 1,
          //   userName: '한가람',
          //   productName: '[풀무원] 탱탱쫄면 (4개입)',
          //   reviewTitle: '너무 맛있어여~',
          //   reviewContent: '면이 쫄깃하고 양념도 짱맛나요!!',
          //   reviewDate: '1679000073528',
          //   recommend: 5,
          // },
          // {
          //   id: 2,
          //   userName: '이영민',
          //   productName: '[풀무원] 탱탱쫄면 (4개입)',
          //   reviewTitle: '또 주문할것 같습니다.',
          //   reviewContent: '또 주문할것 같습니다. 너무 맛있어요 내스타일이야~!',
          //   reviewDate: '1679105976367',
          //   recommend: 3,
          // },
          // {
          //   id: 3,
          //   userName: '심유진',
          //   productName: '[풀무원] 탱탱쫄면 (4개입)',
          //   reviewTitle: '세 번째 주문합니다.',
          //   reviewContent: '맛있네요.',
          //   reviewDate: '1679205976367',
          //   recommend: 4,
          // },
          // {
          //   id: 4,
          //   userName: '나석주',
          //   productName: '[풀무원] 탱탱쫄면 (4개입)',
          //   reviewTitle: '쫄면 중에 최고',
          //   reviewContent: '쫄면 중에 제일 맛있어요',
          //   reviewDate: '1679305976367',
          //   recommend: 2,
          // },
        ]
      : type === 'inquiry'
      ? [
          {
            id: 1,
            userName: '김정식',
            productName: '[풀무원] 탱탱쫄면 (4개입)',
            inquiryTitle: '팩이 터져서 왔어요',
            inquiryContent:
              '스티로폼 박스도 손상되어 있어 포장이 터져 엉망이네요.\n환불 요청합니다.',
            isSecret: false,
            inquiryDate: '1676500073528',
            answer:
              '안녕하세요. 칼리입니다.\n믿고 찾아주신 상품에 불편을 드려 정말 죄송합니다.\n더불어, 해당 게시판은 실시간으로 상담이 어려워 순차적으로 답변드리고 있는 관계로 신속하게 답변 드리지 못하여 대단히 죄송합니다.\n다행히도 고객님의 불편하셨던 사항은 고객행복센터를 통해 안내 받으신 점 확인하였습니다.\n불편을 드려 정말 죄송할 따름이며, 고객님께 늘 신선하고 최상의 상품을 불편 없이 전달드리기 위해 최선을 다하는 칼리가 되겠습니다.\n칼리 드림.',
            answerDate: '1676900073528',
            isFinished: false,
          },
          {
            id: 2,
            userName: '김선진',
            productName: '[풀무원] 탱탱쫄면 (4개입)',
            inquiryTitle: '김선진의 비밀글',
            inquiryContent: '유통기한이 언제까지인가요?',
            isSecret: true,
            inquiryDate: '1676500073528',
            answer: '구매하신 날짜로부터 6개월 이내입니다.',
            answerDate: '1676900073528',
            isFinished: false,
          },
          {
            id: 3,
            userName: '김선범',
            productName: '[풀무원] 탱탱쫄면 (4개입)',
            inquiryTitle: '김선범의 비밀글',
            inquiryContent: '고객 센터 운영 시간이 언제부터 언제까지인가요?',
            isSecret: true,
            inquiryDate: '1676500073528',
            answer: '평일 오전 9시부터 오후 6시까지입니다.',
            answerDate: '1676900073528',
            isFinished: true,
          },
          {
            id: 4,
            userName: '심선범',
            productName: '[풀무원] 탱탱쫄면 (4개입)',
            inquiryTitle: '심선범의 비밀글',
            inquiryContent: '배송지 변경 문의',
            isSecret: true,
            inquiryDate: '1676500073528',
            answer: '확인 결과 이미 발송이 되어 배송지 변경은 불가합니다.',
            answerDate: '1676900073528',
            isFinished: true,
          },
          {
            id: 5,
            userName: '야무',
            productName: '[풀무원] 탱탱쫄면 (4개입)',
            inquiryTitle: '야무의 비밀글',
            inquiryContent: '단순 변심 사유로 환불 요청합니다.',
            isSecret: true,
            inquiryDate: '1676500073528',
            answer: '환불 처리해드렸습니다. 감사합니다.',
            answerDate: '1676900073528',
            isFinished: true,
          },
          {
            id: 6,
            userName: '김데레사',
            productName: '[풀무원] 탱탱쫄면 (4개입)',
            inquiryTitle: '김데레사의 비밀글',
            inquiryContent: '배송일이 언제인가요?',
            isSecret: true,
            inquiryDate: '1676500073528',
            answer: '당일 배송입니다.',
            answerDate: '1676900073528',
            isFinished: true,
          },
        ]
      : [];

  const [state, setState] = useState(initialArr);

  return (
    <section id={id} ref={ref} className={classes.productDetailView}>
      <ReviewInquiryHeader type={type} state={state} setState={setState} />
      {type === 'review' ? (
        <Review reviews={state}></Review>
      ) : type === 'inquiry' ? (
        <Inquiry inquiries={state}></Inquiry>
      ) : null}
    </section>
  );
};

export default forwardRef(ProductDetailView);

/* --------------------------------- Example -------------------------------- */
// <ProductDetailView type='review' id="review" ref={review} />
// <ProductDetailView type={'inquiry'} id="inquiry" ref={inquiry} />
