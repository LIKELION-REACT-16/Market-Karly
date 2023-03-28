import classes from './ProductDetailView.module.scss';
import { ReactComponent as Notice } from '@/assets/img-icon-notice.svg';
import Badge from '@/components/Badge';
import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as Prev } from '@/assets/img-icon-prev.svg';
import { ReactComponent as PrevActive } from '@/assets/img-icon-prev-active.svg';
import { ReactComponent as Next } from '@/assets/img-icon-next.svg';
import { ReactComponent as NextActive } from '@/assets/img-icon-next-active.svg';

export function Review({ reviews }) {
  const accordionContents = [
    {
      id: 'notice1',
      handle: '금주의 베스트 후기 안내',
      panel: `
          <p>■ 베스트 후기 당첨자 안내</p>
          <p></p>
          <p>고객님 안녕하세요, 컬리입니다.</p>
          <p></p>
          <p>[ 2023년 03월 06일 ~ 2023년 03월 12일 ]의 베스트 후기 당첨자 공지드립니다.</p>
          <p></p>
          <p>컬리는 상품에 대한 고객 여러분의 생생한 의견을 듣고 더 나은 상품을 준비하기 위해 상품 후기 게시판을 운영하고 있습니다.</p>
          <p></p>
          <p>실제로 상품의 후기가 구매 결정에 있어 큰 도움이 된 베스트 후기를 아래로 공유드립니다.</p>
          <p></p>
          <p>정성껏 후기를 작성해주신 모든 고객님께 감사드립니다.</p>
          <p>컬리 드림.</p>
        `,
    },
    {
      id: 'notice2',
      handle: '상품 후기 적립금 정책 안내',
      panel: `
          <p>[ 금주의 Best 후기 및 상품 후기 적립금 정책 변경 안내 ] </p>
          <p>고객님 안녕하세요. 컬리 입니다. 적립금 지급 정책을 안내드리니 컬리 이용에 참고 부탁드립니다. </p>
          <p>■ 적립금 지급 정책 ■</p>
          <p> 1. 일반 후기 -글 후기 50원/건 </p>
          <p>-사진 후기 100원/건 </p>
          <p>*퍼플/더퍼플 러버스 고객님께는 더블 후기 적립금이 지급됩니다. </p>
          <p>*지급에 영업일 기준 1~2일 소요됩니다. </p>
          <p>→ 금~일 작성 시, 월요일 지급 </p>
          <p>2. 베스트 후기 </p>
          <p>1) 선정 건 수 : 일주일 최대 100건 </p>
          <p>2) 혜택 : 선정 시 적립금 5,000원 </p>
          <p>3) 지급 일시 : 매주 수요일 (지급일이 공휴일의 경우 전 영업일) </p>
          <p>*당첨 ID 및 그 주의 Best 후기는 후기 게시판에서 확인하실 수 있습니다. </p>
          <p>3. 상품 후기 게시판(Product review) 적립금 지급 유의 사항 </p>
          <p>컬리는 믿을 수 있는 후기문화를 함께 만들어가고자 합니다. 따라서 후기 내용이 아래에 해당하는 경우에는 검토 후 삭제 및 적립금 회수 조치될 수 있습니다. </p>
          <p>1. 욕설, 폭력성, 음란성, 상업성 등 업체나 타인에게 불쾌한 내용을 작성한 경우 </p>
          <p>2. 구매한 상품과 무관한 내용이나 동일 문자/단순 초성의 반복 등 부적합한 내용을 작성한 경우 </p>
          <p>3. 상품의 기능이나 효과 등에 오해의 소지가 있는 내용을 작성한 경우 </p>
          <p>4. 저작권, 초상권 등 타인의 권리를 침해하는 이미지, 동영상을 사용한 경우 </p>
          <p>5. 구매한 상품이 아닌 캡쳐 사진, 포장 박스 사진 등 상품과 관련 없는 이미지, 동영상을 사용한 경우 </p>
          <p>또한, 비정상적인 방법을 통해 후기를 작성하고 적립금을 취득한 경우 작성자에 법적 책임의 소지가 있음을 알려드립니다. </p>
        `,
    },
  ];

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

  // 공지사항 아코디언 활성화 id
  const [selectedId, setSelectedId] = useState(null);
  // 추천순 최신순 정렬
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    if (selectedId === index) {
      setSelectedId(null);
    } else {
      setSelectedId(index);
    }
  };

  const sortByActiveIndex = (index) => {
    const reviewsCopy = [...reviews];
    if (index === 0) {
      return reviewsCopy.sort((a, b) => b.recommend - a.recommend);
    } else if (index === 1) {
      return reviewsCopy.sort((a, b) => b.reviewDate - a.reviewDate);
    }
  };

  return (
    <div className={classes.review}>
      {/* group1 */}
      <div className={classes.reviewTotal}>
        <span>총 {reviews?.length}개</span>
        <div className={classes.reviewTotalFrame75}>
          <span
            className={activeIndex === 0 ? classes.active : ''}
            onClick={() => setActiveIndex(0)}
          >
            추천순
          </span>

          <span aria-hidden="true"></span>
          <span
            className={activeIndex === 1 ? classes.active : ''}
            onClick={() => setActiveIndex(1)}
          >
            최근 등록순
          </span>
        </div>
      </div>

      {/* group2 */}
      <div className={classes.reviewTable}>
        {/* group2-1 공지사항 */}
        <div>
          {accordionContents.map((notice) => (
            <article
              key={notice.id}
              aria-labelledby={`accordion-header-${notice.id}`}
              data-component="AccordionItem"
            >
              <div data-component="AccordionHandle">
                <button
                  type="button"
                  id={`${notice.id}-handle`}
                  aria-expanded={selectedId === notice.id ? true : false}
                  aria-controls={notice.id}
                  onClick={() => toggleAccordion(notice.id)}
                >
                  {notice.handle}
                </button>
              </div>

              <div
                role="region"
                aria-labelledby={`${notice.id}-handle`}
                data-component="AccordionPanel"
                className={
                  selectedId === notice.id
                    ? classes.activeNotice
                    : classes.hiddenNotice
                }
                dangerouslySetInnerHTML={{ __html: notice.panel }}
              />
            </article>
          ))}
        </div>

        {/* group2-2 본문 */}
        {reviews?.length === 0 ? (
          <div className={classes.reviewTableEmpty}>
            <Notice />
            <span>따끈한 첫 후기를 기다리고 있어요.</span>
          </div>
        ) : (
          <ul>
            {sortByActiveIndex(activeIndex).map((review) => {
              return (
                <ReviewItem
                  key={review.id}
                  userName={maskingName(review.userName)}
                  productName={review.productName}
                  reviewTitle={review.reviewTitle}
                  reviewContent={review.reviewContent}
                  reviewDate={new Date(
                    parseInt(review.reviewDate, 10)
                  ).toLocaleDateString('ko-KR')}
                  recommend={review.recommend}
                />
              );
            })}
          </ul>
        )}
      </div>

      {/* group3 */}
      {reviews?.length <= 5 ? null : (
        <div style={{ display: 'flex', gap: '16px' }}>
          <Prev />
          {/* <PrevActive /> */}
          <NextActive />
          {/* <Next /> */}
        </div>
      )}
    </div>
  );
}

function ReviewItem({
  id,
  userName,
  productName,
  reviewTitle,
  reviewContent,
  reviewDate,
  recommend,
}) {
  return (
    <li className={classes.reviewItem} data-id={id} data-recommend={recommend}>
      <div className={classes.reviewItemFrame76}>
        <Badge badgeName="베스트"></Badge>
        <Badge badgeName="퍼플"></Badge>
        <span>{userName}</span>
      </div>
      <div className={classes.reviewItemFrame78}>
        <span>{productName}</span>
        <p>{reviewTitle}</p>
        <p>
          {reviewContent} (추천 {recommend})
        </p>
        <span>{reviewDate}</span>
      </div>
    </li>
  );
}
