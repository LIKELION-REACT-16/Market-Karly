import { FooterButton } from '../Button';
import classes from '@/styles/components/Footer/Inquiry.module.scss';

export default function Inquiry() {
  return (
    <div className={classes.inquirys}>
      <div className={classes.inquiry}>
        <FooterButton>카카오톡 문의</FooterButton>
        <div>
          <span>월~토요일 | 오전 7시 - 오후 6시</span>
          <span>일/공휴일 | 오전 7시 - 오후 1시</span>
        </div>
      </div>
      <div className={classes.inquiry}>
        <FooterButton>1:1 문의</FooterButton>
        <div>
          <span>365일</span>
          <span>고객센터 운영시간에 순차적으로 답변드리겠습니다.</span>
        </div>
      </div>
      <div className={classes.inquiry}>
        <FooterButton>대량주문 문의</FooterButton>
        <div>
          <span>월~금요일 | 오전 9시 - 오후 1시</span>
          <span>점심시간 | 오후 12시 - 오후 1시</span>
        </div>
      </div>
    </div>
  );
}
