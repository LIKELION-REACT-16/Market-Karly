import classes from '@/components/ProductDetailView/ProductDetailView.module.scss';
import { useRef } from 'react';
import { ReactComponent as Prev } from '@/assets/img-icon-prev.svg';
import { ReactComponent as PrevActive } from '@/assets/img-icon-prev-active.svg';
import { ReactComponent as Next } from '@/assets/img-icon-next.svg';
import { ReactComponent as NextActive } from '@/assets/img-icon-next-active.svg';

export function Inquiry({ inquiries }) {
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
          {inquiries.map((inquiry) => (
            <InquiryItem
              {...inquiry}
              key={inquiry.id}
              userName={maskingName(inquiry.userName)}
              inquiryDate={new Date(
                parseInt(inquiry.inquiryDate, 10)
              ).toLocaleDateString('ko-KR')}
              answerDate={new Date(
                parseInt(inquiry.answerDate, 10)
              ).toLocaleDateString('ko-KR')}
            />
          ))}
        </tbody>
      </table>

      {/* group2 */}
      {inquiries?.length <= 5 ? null : (
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

function InquiryItem({
  id,
  userName,
  productName,
  inquiryTitle,
  inquiryContent,
  isSecret,
  inquiryDate,
  answer,
  answerDate,
  isFinished,
}) {
  const answerState = isFinished ? '답변완료' : '답변대기';
  const contentRef = useRef();

  return (
    <>
      {isSecret ? (
        <tr className={`${classes.noticeHead} ${classes.lock}`}>
          <td>비밀글입니다.</td>
          <td>{userName}</td>
          <td>{inquiryDate}</td>
          {/* <td className={classNames(isFinished && classes.finished)}> */}
          <td className={isFinished ? `${classes.finished}` : ''}>
            {answerState}
          </td>
        </tr>
      ) : (
        <>
          <tr
            className={`${classes.noticeHead} ${classes.hover}`}
            onClick={(e) => {
              contentRef.current.classList.toggle(`${classes.hidden}`);
            }}
          >
            <td>{inquiryTitle}</td>
            <td>{userName}</td>
            <td>{inquiryDate}</td>
            <td className={isFinished ? `${classes.finished}` : ''}>
              {answerState}
            </td>
          </tr>
          <tr>
            <td colSpan={4} className={`${classes.tableAnswer}`}>
              <div
                className={`${classes.hidden} ${classes.answer}`}
                ref={contentRef}
              >
                <p>{inquiryContent}</p>
                <p>{answer}</p>
                <p>{answerDate}</p>
              </div>
            </td>
          </tr>
        </>
      )}
    </>
  );
}
