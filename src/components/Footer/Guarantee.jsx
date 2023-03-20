import classes from '@/styles/components/Footer/Guarantee.module.scss';

import ISMS from '@/assets/logo_isms.svg';
import Privacy from '@/assets/logo_privacy.svg';
import TossPayments from '@/assets/logo_tosspayments.svg';
import WooriBank from '@/assets/logo_wooriBank.svg';

export default function Guarantee() {
  const guaranteeList = [
    {
      key: 1,
      name: 'isms',
      src: ISMS,
      first: '[인증범위] 마켓칼리 쇼핑몰 서비스 개발 운영',
      second: '(심사받지 않은 물리적 인프라 제외)',
      third: '[유효기간] 2022.01.19 ~ 2025.01.18',
    },
    {
      key: 2,
      name: 'privacy',
      src: Privacy,
      first: '개인정보보호 우수 웹사이트',
      second: '개인정보처리시스템 인증 (ePRIVACY PLUS)',
    },
    {
      key: 3,
      name: 'tossPayments',
      src: TossPayments,
      first: '토스페이먼츠 구매안전(에스크로) 서비스',
      second: '를 이용하실 수 있습니다.',
    },
    {
      key: 4,
      name: 'wooriBank',
      src: WooriBank,
      first: '고객님이 현금으로 결제한 금액에 대해 우리은행과 채무지급보',
      second: '증 계약을 체결하여 안전거래를 보장하고 있습니다.',
    },
  ];

  return (
    <ul className={classes.guarantee}>
      {guaranteeList.map((item) => (
        <li className={classes.guaranteeLi}>
          <img
            src={item.src}
            alt={item.name}
            className={classes.guaranteeLogo}
          />
          <div className={classes.guaranteeText}>
            <p>{item.first}</p>
            <p>{item.second}</p>
            <p>{item.third}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
