import classes from '@/styles/components/Footer/CustomerService.module.scss';

import Inquiry from './Inquiry';
import CallNumber from './CallNumber';
import NonMembers from './NonMembers';

export default function CustomerService() {
  return (
    <div className={classes.customerService}>
      <span className={classes.title}>고객행복센터</span>
      <CallNumber tel="1644-1107" openDay="월~토요일 오전 7시 - 오후 6시" />
      <Inquiry />
      <div className={classes.mail}>
        <NonMembers mailto="help@karlycorp.com">비회원 문의 :</NonMembers>
        <NonMembers mailto="help@karlycorp.com">
          비회원 대량주문 문의 :
        </NonMembers>
      </div>
    </div>
  );
}
