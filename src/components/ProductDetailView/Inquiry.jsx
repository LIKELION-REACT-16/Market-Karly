import classes from '@/components/ProductDetailView/ProductDetailView.module.scss';
import { ButtonPrevNext } from './ButtonPrevNext/ButtonPrevNext';

export function Inquiry() {
  return (
    <div className={classes.inquiry}>
      {/* group1 */}
      <table>
        <caption>상품문의 목록</caption>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>답변상태</th>
          </tr>
        </thead>
        <tbody>
          <tr className={classes.noticeHead}>
            <td>팩이 터져서 왔어요</td>
            <td>김*식</td>
            <td>2022.11.11</td>
            <td>답변대기</td>
          </tr>
          <tr>
            <td colSpan={4} className={classes.tableAnswer}>
              <p>
                스티로폼 박스도 손상되어 있어 포장이 터져 엉망이네요 환불
                요청합니다.
              </p>
              <p>
                안녕하세요. 칼리입니다. 믿고 찾아주신 상품에 불편을 드려 정말
                죄송합니다. 더불어, 해당 게시판은 실시간으로 상담이 어려워
                순차적으로 답변드리고 있는 관계로 신속하게 답변 드리지 못하여
                대단히 죄송합니다. 다행히도 고객님의 불편하셨던 사항은
                고객행복센터를 통해 안내 받으신 점 확인하였습니다. 불편을 드려
                정말 죄송할 따름이며, 고객님께 늘 신선하고 최상의 상품을 불편
                없이 전달드리기 위해 최선을 다하는 칼리가 되겠습니다. 칼리 드림.
              </p>
            </td>
          </tr>
          <tr className={`${classes.noticeHead} ${classes.lock}`}>
            <td>비밀글입니다.</td>
            <td>김*범</td>
            <td>2022.09.13</td>
            <td>답변완료</td>
          </tr>
        </tbody>
      </table>

      {/* group2. review, inquiry 두 군데에서 사용됨 */}
      <div style={{ display: 'flex', gap: '16px' }}>
        <ButtonPrevNext
          ariaLabel="상품 후기 이전 페이지 버튼"
          className="prev"
        />
        <ButtonPrevNext
          ariaLabel="상품 후기 다음 페이지 버튼"
          className="next-active"
        />
      </div>
    </div>
  );
}
