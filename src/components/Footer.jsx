import '@/styles/layout/footer.scss';
import Arrow from '@/assets/Arrow.svg';
import Blog from '@/assets/Blog.svg';
import Facebook from '@/assets/Facebook.svg';
import Instagram from '@/assets/Instagram.svg';
import NaverPost from '@/assets/NaverPost.svg';
import Youtube from '@/assets/Youtube.svg';
import ISMS from '@/assets/logo_isms.svg';
import Privacy from '@/assets/logo_privacy.svg';
import TossPayments from '@/assets/logo_tosspayments.svg';
import WooriBank from '@/assets/logo_wooriBank.svg';

const Footer = () => {
  return (
    <>
      <footer>
        <h2 className="a11y-hidden">Footer</h2>
        <div className="Inner">
          <div className="Top">
            <div className="CustomerService">
              <span className="Text">고객행복센터</span>
              <div className="Number">
                <span className="Tel">1644-1107</span>
                <span className="Live">월~토요일 오전 7시 - 오후 6시</span>
              </div>
              <div className="Inquirys">
                <div className="Inquiry">
                  <button className="Button">
                    <span className="ButtonText">카카오톡 문의</span>
                  </button>
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
                  <button className="Button">
                    <span className="ButtonText">1:1 문의</span>
                  </button>
                  <div className="Time">
                    <span className="TimeTop">365일</span>
                    <span className="TimeBottom">
                      고객센터 운영시간에 순차적으로 답변드리겠습니다.
                    </span>
                  </div>
                </div>
                <div className="Inquiry">
                  <button className="Button">
                    <span className="ButtonText">대량주문 문의</span>
                  </button>
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
              <ul className="FooterNavigation">
                <li className="List">
                  <span className="Text">칼리소개</span>
                </li>
                <li className="List">
                  <span className="Text">칼리소개영상</span>
                </li>
                <li className="List">
                  <span className="Text">인재채용</span>
                </li>
                <li className="List">
                  <span className="Text">이용약관</span>
                </li>
                <li className="List">
                  <span className="Text">개인정보처리방침</span>
                </li>
                <li className="List">
                  <span className="Text">이용안내</span>
                </li>
              </ul>
              <div className="Area">
                <div className="Paragraph">
                  <span className="Text">법인명 (상호) : 주식회사 컬리</span>
                  <div className="Bar"></div>
                  <span className="Text">사업자등록번호 : 261-81-23567</span>
                  <div className="Bar"></div>
                  <a href="/" className="Link">
                    <span>사업자정보 확인</span>
                    <img className="More" src={Arrow} alt="더보기" />
                  </a>
                </div>
                <div className="Paragraph">
                  <span className="Text">
                    통신판매업 : 제 2018-서울강남-01646 호
                  </span>
                  <div className="Bar"></div>
                  <span className="Text">개인정보보호책임자 : 이원준</span>
                </div>
                <div className="Paragraph">
                  <span className="Text">
                    주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)
                  </span>
                  <div className="Bar"></div>
                  <span className="Text">대표이사 : 김슬아</span>
                </div>
                <div className="Paragraph">
                  <span className="Text">입점문의 : 입점문의하기</span>
                  <div className="Bar"></div>
                  <span className="Text">제휴문의 :</span>
                  <a href="mailto:business@karlycorp.com" className="Link">
                    <span>business@karlycorp.com</span>
                    <img className="More" src={Arrow} alt="더보기" />
                  </a>
                </div>
                <div className="Paragraph">
                  <span className="Text">채용문의 :</span>
                  <a href="mailto:recruit@karlycorp.com" className="Link">
                    <span>recruit@karlycorp.com</span>
                    <img className="More" src={Arrow} alt="더보기" />
                  </a>
                </div>
                <span className="Text">팩스 : 070 - 7500 - 6098</span>
              </div>
              <ul className="Sns">
                <li>
                  <a href="#" className="SnsLink">
                    <img src={Blog} alt="네이버 블로그" className="SnsIcon" />
                  </a>
                </li>
                <li>
                  <a href="#" className="SnsLink">
                    <img src={Facebook} alt="페이스북" className="SnsIcon" />
                  </a>
                </li>
                <li>
                  <a href="#" className="SnsLink">
                    <img src={Instagram} alt="인스타그램" className="SnsIcon" />
                  </a>
                </li>
                <li>
                  <a href="#" className="SnsLink">
                    <img
                      src={NaverPost}
                      alt="네이버 포스트"
                      className="SnsIcon"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="SnsLink">
                    <img src={Youtube} alt="유튜브" className="SnsIcon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="Middle">
            <div className="Guarantee">
              <img src={ISMS} alt="isms" className="Logo" />
              <div className="Text">
                <p>[인증범위] 마켓칼리 쇼핑몰 서비스 개발 운영</p>
                <p>(심사받지 않은 물리적 인프라 제외)</p>
                <p>[유효기간] 2022.01.19 ~ 2025.01.18</p>
              </div>
            </div>
            <div className="Guarantee">
              <img src={Privacy} alt="privacy" className="Logo" />
              <div className="Text">
                <p>개인정보보호 우수 웹사이트</p>
                <p>개인정보처리시스템 인증 (ePRIVACY PLUS)</p>
              </div>
            </div>
            <div className="Guarantee">
              <img src={TossPayments} alt="payments" className="Logo" />
              <div className="Text">
                <p>토스페이먼츠 구매안전(에스크로) 서비스</p>
                <p>를 이용하실 수 있습니다.</p>
              </div>
            </div>
            <div className="Guarantee">
              <img src={WooriBank} alt="wooriBank" className="Logo" />
              <div className="Text">
                <p>
                  고객님이 현금으로 결제한 금액에 대해 우리은행과 채무지급보
                </p>
                <p>증 계약을 체결하여 안전거래를 보장하고 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Bottom">
          <div className="Inner">
            <p className="Text">
              마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가
              판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
              <br />
              마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서
              통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질,
              교환/환불 등 의무와 책임을 부담하지 않습니다.
            </p>
            <p className="Text">© KURLY CORP. ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
