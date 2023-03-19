import { NormalButton } from '@/components/Button';

import location from '@/assets/img-location.svg';

export default function Credit() {
  return (
    <div className="credit">
      <div className="location">
        <div className="frame122">
          <div className="frame121">
            <img src={location} alt="배송지" />
            <span>배송지</span>
          </div>
          <span>서울 중랑구 면목로 42길 11 (행운빌딩) 603호</span>
          <span>샛별배송</span>
          <NormalButton width="244" color="true">
            <span>배송지 변경</span>
          </NormalButton>
        </div>
        <div className="frame120">
          <div className="frame119">
            <div className="frame113">
              <span>상품금액</span>
              <div className="frame112">
                <span>40,680</span>
                <span>원</span>
              </div>
            </div>
            <div className="frame114">
              <span>상품할인금액</span>
              <div className="frame112">
                <span>-4,651</span>
                <span>원</span>
              </div>
            </div>
            <div className="frame115">
              <span>배송비</span>
              <div className="frame112">
                <span>+3,000</span>
                <span>원</span>
              </div>
            </div>
          </div>
          <div className="frame118">
            <div className="frame116">
              <span>결제예정금액</span>
              <div className="frame112">
                <span>40,680</span>
                <span>원</span>
              </div>
            </div>
            <div className="frame117">
              <div className="badge">
                <span>적립</span>
              </div>
              <span>최대 36원 적립 일반 0.1%</span>
            </div>
          </div>
        </div>
      </div>
      <NormalButton width="284">
        <span>주문하기</span>
      </NormalButton>
      <div className="notice">
        <p>쿠폰/적립금은 주문서에서 사용 가능합니다</p>
        <p>[주문완료] 상태일 경우에만 주문 취소 가능합니다.</p>
        <p>
          [마이컬리 &gt; 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.
        </p>
        <p>
          쿠폰, 적립금 사용 금액을 제외한 실 결제 금액 기준으로 최종 산정됩니다.
        </p>
        <p>
          상품별로 적립금 지급 기준이 다를 수 있습니다. (상품 상세 페이지에서
          확인 가능합니다)
        </p>
      </div>
    </div>
  );
}
