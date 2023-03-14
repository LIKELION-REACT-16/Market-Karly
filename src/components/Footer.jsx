import Button from './Button';

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <h2>Footer</h2>
        <div className="Inner">
          <div className="Top">
            <div className="CustomerService">
              <span className="Text">고객행복센터</span>
              <div className="Number">
                <span className="Tel">1644-1107</span>
                <span className="Live">월~토요일 오전 7시 ~ 오후 6시</span>
              </div>
              <div className="Inquirys">
                <div className="Inquiry">
                  <Button />
                  <div className="Time">
                    <span className="TimeTop">
                      월~토요일 | 오전 7시 - 오후 6시
                    </span>
                    <span className="TimeBottom">
                      일/공휴일 | 오전 7시 - 오후 1시
                    </span>
                  </div>
                </div>
                <div className="Inquiry">
                  <Button />
                  <div className="Time">
                    <span className="TimeTop">365일</span>
                    <span className="TimeBottom">
                      고객센터 운영시간에 순차적으로 답변드리겠습니다.
                    </span>
                  </div>
                </div>
                <div className="Inquiry">
                  <Button />
                  <div className="Time">
                    <span className="TimeTop">
                      월~금요일 | 오전 9시 - 오후 1시
                    </span>
                    <span className="TimeBottom">
                      점심시간 | 오후 12시 - 오후 1시
                    </span>
                  </div>
                </div>
              </div>
              <div className="Mail">
                <div className="Frame23">
                  <span className="MailText">비회원 문의 :</span>
                  <a href="mailto:help@karlycorp.com" className="MailMail">
                    help@karlycorp.com
                  </a>
                </div>
                <div className="Frame24">
                  <span className="MailText">비회원 대량주문 문의 :</span>
                  <a href="mailto:help@karlycorp.com" className="MailMail">
                    help@karlycorp.com
                  </a>
                </div>
              </div>
            </div>
            <div className="About">
              <nav className="FooterNavigation">
                <ul>
                  <li>
                    <span className="FooterNavigationText">칼리소개</span>
                  </li>
                  <li>
                    <span className="FooterNavigationText">칼리소개영상</span>
                  </li>
                  <li>
                    <span className="FooterNavigationText">인재채용</span>
                  </li>
                  <li>
                    <span className="FooterNavigationText">이용약관</span>
                  </li>
                  <li>
                    <span className="FooterNavigationText">
                      개인정보처리방침
                    </span>
                  </li>
                  <li>
                    <span className="FooterNavigationText">이용안내</span>
                  </li>
                </ul>
              </nav>
              <div className="Area">
                <div className="Paragraph">
                  <span className="ParagraphText">
                    법인명 (상호) : 주식회사 컬리
                  </span>
                  <div className="ParagraphBar">|</div>
                  <span className="ParagraphText">
                    사업자등록번호 : 261-81-23567
                  </span>
                  <div className="ParagraphBar">|</div>
                  <a href="/" className="ParagraphLink">
                    사업자정보 확인
                  </a>
                </div>
                <div className="Paragraph">
                  <span className="ParagraphText">
                    통신판매업 : 제 2018-서울강남-01646 호
                  </span>
                  <div className="ParagraphBar">|</div>
                  <span className="ParagraphText">
                    개인정보보호책임자 : 이원준
                  </span>
                </div>
                <div className="Paragraph">
                  <span className="ParagraphText">
                    주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)
                  </span>
                  <div className="ParagraphBar">|</div>
                  <span className="ParagraphText">대표이사 : 김슬아</span>
                </div>
                <div className="Paragraph">
                  <span className="ParagraphText">입점문의 : 입점문의하기</span>
                  <div className="ParagraphBar">|</div>
                  <div className="Frame25">
                    <span className="ParagraphText">제휴문의 :</span>
                    <a
                      href="mailto:business@karlycorp.com"
                      className="ParagraphLink"
                    >
                      business@karlycorp.com
                    </a>
                  </div>
                </div>
                <div className="Paragraph">
                  <span className="ParagraphText">채용문의 :</span>
                  <div className="ParagraphBar">|</div>
                  <a
                    href="mailto:recruit@karlycorp.com"
                    className="ParagraphLink"
                  >
                    recruit@karlycorp.com
                  </a>
                </div>
                <span className="ParagraphText">팩스 : 070 - 7500 - 6098</span>
              </div>
              <nav className="Sns">
                <ul>
                  <li>
                    <a href="#" className="SnsLink">
                      <img src="#" alt="네이버 블로그" className="SnsIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="SnsLink">
                      <img src="#" alt="페이스북" className="SnsIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="SnsLink">
                      <img src="#" alt="인스타그램" className="SnsIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="SnsLink">
                      <img src="#" alt="네이버 포스트" className="SnsIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="SnsLink">
                      <img src="#" alt="유튜브" className="SnsIcon" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="Middle">
            <div className="Guarantee">
              <img src="#" alt="isms" className="GuaranteeLogo" />
              <div className="GuaranteeText">
                <p>[인증범위] 마켓칼리 쇼핑몰 서비스 개발 운영</p>
                <p>(심사받지 않은 물리적 인프라 제외)</p>
                <p>[유효기간] 2022.01.19 ~ 2025.01.18</p>
              </div>
            </div>
            <div className="Guarantee">
              <img src="#" alt="privacy" className="GuaranteeLogo" />
              <div className="GuaranteeText">
                <p>개인정보보호 우수 웹사이트</p>
                <p>개인정보처리시스템 인증 (ePRIVACY PLUS)</p>
              </div>
            </div>
            <div className="Guarantee">
              <img src="#" alt="payments" className="GuaranteeLogo" />
              <div className="GuaranteeText">
                <p>토스페이먼츠 구매안전(에스크로) 서비스</p>
                <p>를 이용하실 수 있습니다.</p>
              </div>
            </div>
            <div className="Guarantee">
              <img src="#" alt="wooriBank" className="GuaranteeLogo" />
              <div className="GuaranteeText">
                <p>
                  고객님이 현금으로 결제한 금액에 대해 우리은행과 채무지급보
                </p>
                <p>증 계약을 체결하여 안전거래를 보장하고 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Bottom">
          <div className="BottomInner">
            <div className="BottomTop">
              <p className="BottomText">
                마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별
                판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어
                있습니다.
              </p>
              <p className="BottomText">
                마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서
                통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질,
                교환/환불 등 의무와 책임을 부담하지 않습니다.
              </p>
            </div>
          </div>
          <p className="BottomText">© KURLY CORP. ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
