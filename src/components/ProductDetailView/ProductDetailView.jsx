import classes from '@/components/ProductDetailView/ProductDetailView.module.scss';
import { forwardRef } from 'react';
import { Inquiry } from './Inquiry';
import { Review } from './Review';
import { ReviewInquiryHeader } from './ReviewInquiryHeader';

const ProductDetailView = ({ type = 'review', id }, ref) => {
  const reviewData = {
    reviews: [
      {
        id: 1,
        userName: '한가람',
        productName: '[풀무원] 탱탱쫄면 (4개입)',
        reviewContent: '너무 맛있어여~면이 쫄깃하고 양념도 짱맛나요!!(추천5)',
        // reviewDate: '2022-11-10',
        reviewDate: 20221110,
        recommend: 5,
      },
      {
        id: 2,
        userName: '이영민',
        productName: '[풀무원] 탱탱쫄면 (4개입)',
        reviewContent:
          '또 주문할것 같습니다. 너무 맛있어요 내스타일이야~!(추천3)',
        // reviewDate: '2022-12-10',
        reviewDate: 20221210,
        recommend: 3,
      },
      {
        id: 3,
        userName: '심유진',
        productName: '[풀무원] 탱탱쫄면 (4개입)',
        reviewContent: '세 번째 주문합니다. 맛있네요.(추천4)',
        reviewDate: 20230110,
        recommend: 4,
      },
      {
        id: 4,
        userName: '나석주',
        productName: '[풀무원] 탱탱쫄면 (4개입)',
        reviewContent: '4개입 주문했는데 2개가 서비스로 더 와요.(추천2)',
        reviewDate: 20230210,
        recommend: 2,
      },
    ],
  };

  const maskingName = (strName) => {
    if (strName.length > 2) {
      var originName = strName.split('');
      originName.forEach(function (name, i) {
        if (i === 0 || i === originName.length - 1) return;
        originName[i] = '*';
      });
      var joinName = originName.join();
      return joinName.replace(/,/g, '');
    } else {
      var pattern = /.$/; // 정규식
      return strName.replace(pattern, '*');
    }
  };

  // 일단 전체 리뷰 데이터를 마스킹 처리하는 방식(추후에 필요한 데이터만 마스킹 처리하는 방식으로 리팩토링 필요)
  const maskedReviews = reviewData.reviews.map((review) => {
    return {
      ...review,
      userName: maskingName(review.userName),
    };
  });

  return (
    <section id={id} ref={ref} className={classes.productDetailView}>
      <ReviewInquiryHeader type={type} />
      {type === 'review' ? (
        <Review maskedReviews={maskedReviews}></Review>
      ) : type === 'inquiry' ? (
        <Inquiry></Inquiry>
      ) : null}
    </section>
  );
};

export default forwardRef(ProductDetailView);

/* --------------------------------- Example -------------------------------- */
// <ProductDetailView type='review' id="review" ref={review} />
// <ProductDetailView type={'inquiry'} id="inquiry" ref={inquiry} />
