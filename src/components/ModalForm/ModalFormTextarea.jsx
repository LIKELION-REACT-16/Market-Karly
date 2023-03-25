import classes from '@/components/ModalForm/ModalForm.module.scss';
import { forwardRef, useRef } from 'react';

const ModalFormTextarea = (
  { type, contentValue, onContentValueChangeHandler, ...restProps },
  ref
) => {
  const textAreaRef = useRef();

  const onClickHandler = () => {
    ref.current.classList.toggle(`${classes.hidden}`);
    textAreaRef.current.focus();
  };

  const onBlurHandler = () => {
    if (textAreaRef.current.value === '') {
      ref.current.classList.toggle(`${classes.hidden}`);
    }
  };

  return (
    <div className={classes.textArea}>
      <textarea
        name="content"
        id="content"
        ref={textAreaRef}
        onBlur={onBlurHandler}
        value={contentValue}
        onChange={onContentValueChangeHandler}
      />
      {type === 'review' ? (
        <ul
          className={`${classes.placeholder}`}
          ref={ref}
          onClick={onClickHandler}
        >
          <li>
            <span>
              컬리는 믿을 수 있는 후기문화를 함께 만들어가고자 합니다. 식품 등의
              표시광고에 대한 법률을 준수하고자 다음과 같은 부당한 상품평에
              대해서는 별도 고지 없이 임시 대처, 비공개 전환, 삭제, 적립금 회수
              등의 필요한 조치가 취해 질 수 있습니다.
            </span>
          </li>
          <li>
            <p>후기 작성 시 유의 사항</p>
            <ul>
              <li>
                개인의 주관적인 의견으로 인해 상품의 기능 및 효과에 대하여
                오해의 소지가 있는 내용
              </li>
              <li>
                식품/건강기능식품과 관련하여 질병의 예방 및 치료,
                체중감량(다이어트)에 효능효과가 있다는 내용
              </li>
              <li>
                일반 화장품을 기능성화장품의 효능효과가 있다는 내용을 통한 오인
                표현
              </li>
              <li>의약외품을 의약품으로 오인하게 하는 표현</li>
              <li>
                생활화학제품을 본래 용도와 다르게 사용하는 내용 및 효능효과를
                과장하는 내용
              </li>
              <li>
                욕설, 폭력성, 음란성, 상업성 등의 게시물 또는 구매 상품과
                무관하거나 반복되는 동일 단어나 문장을 사용하여 판매자나 다른
                이용자의 후기 이용을 방해한다고 판단되는 경우
              </li>
              <li>
                구매한 상품이 아닌 캡쳐 사진, 타인 사진 도용, 포장 박스,
                퍼플박스, 구매 상품을 구분할 수 없는 전체 사진 등 상품과 관련
                없는 이미지, 동영상을 사용한 경우
              </li>
              <li>
                본인 또는 타인의 주민등록번호, (휴대)전화번호, 이메일 등
                개인정보가 포함된 경우
              </li>
              <li>
                그 밖에 상품평으로 인해 다른 회원 또는 제3자에게 피해가 가해질
                내용
              </li>
              <li>
                작성된 글과 첨부된 멀티미디어 파일 등으로 이루어진 각 상품평은
                개인의 의견을 반영하므로, 게시된 내용에 대한 모든 책임은
                작성자에게 있습니다. 또한 비정상적인 방법을 통해 후기를 작성하고
                적립금을 취득한 경우 작성자에 법적 책임의 소지가 있음을
                알려드립니다.
              </li>
              <li className={classes.infoError}>
                ※ 작성된 글과 첨부된 멀티미디어 파일 등으로 이루어진 각 상품평은
                개인의 의견을 반영하므로, 게시된 내용에 대한 모든 책임은
                작성자에게 있습니다. 또한 비정상적인 방법을 통해 후기를 작성하고
                적립금을 취득한 경우 작성자에 법적 책임의 소지가 있음을
                알려드립니다.
              </li>
            </ul>
          </li>
        </ul>
      ) : type === 'inquiry' ? (
        <ul className={classes.placeholder} ref={ref} onClick={onClickHandler}>
          <li>
            <p>상품문의 작성 전 확인해 주세요</p>
            <ul>
              <li>답변은 영업일 기준 2~3일 소요됩니다.</li>
              <li>
                해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로
                이동될 수 있습니다.
              </li>
              <li>
                배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이칼리
                내 1:1 문의에 남겨주세요.
              </li>
            </ul>
          </li>
          <li>
            <p>제품</p>
            <ul>
              <li>
                입고일 : 품절 상품 입고 일이 확정된 경우, 섬네일에 기재되어
                있습니다. (종 모양을 클릭하여, 재입고 알림 설정 가능)
              </li>
              <li>
                제품 상세정보 : 영양성분 및 함량, 용량, 보관 및 취급 방법 등
                제품 정보는 상세이미지 또는 상세정보에서 확인 가능합니다.
              </li>
            </ul>
          </li>
          <li>
            <p>주문취소</p>
            <ul>
              <li>배송 단계별로 주문취소 방법이 상이합니다.</li>
              <li>
                [입금확인] 단계 : [마이칼리 &gt; 주문내역 상세페이지] 에서 직접
                취소 가능
              </li>
              <li>[입금확인] 이후 단계 : 고객센터로 문의</li>
              <li>
                생산이 시작된 [상품 준비중] 이후에는 취소가 제한되는 점 고객님의
                양해 부탁드립니다.
              </li>
              <li>
                비회원은 모바일 App 또는 모바일 웹사이트에서 [마이칼리 &gt;
                비회원 주문 조회 페이지] 에서 취소가 가능합니다.
              </li>
              <li>일부 예약상품은 배송 3~4일 전에만 취소 가능합니다.</li>
              <li className={classes.infoError}>
                ※ 주문상품의 부분 취소는 불가능합니다. 전체 주문 취소 후 재구매
                해주세요.
              </li>
            </ul>
          </li>
          <li>
            <p>배송</p>
            <ul>
              <li>주문 완료 후 배송 방법(샛별/택배)은 변경이 불가능합니다.</li>
              <li>배송일 배송시간 지정은 불가능합니다. (예약배송 포함)</li>
              <li className={classes.infoError}>
                ※ 전화번호, 이메일, 주소, 계좌번호 등의 상세 개인정보가 문의
                내용에 저장되지 않도록 주의해 주시기 바랍니다.
              </li>
            </ul>
          </li>
        </ul>
      ) : null}
      <div className={classes.wordCount}>
        <span>( {contentValue.length} / 10 )</span>
      </div>
    </div>
  );
};

export default forwardRef(ModalFormTextarea);
