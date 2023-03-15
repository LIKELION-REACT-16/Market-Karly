import RouteLink from '@/components/RouteLink';
import Test from '@/components/Test';
import InputText from '../components/InputText/InputText'
import star from '@/assets/star.svg'
import right from '@/assets/right.svg'
import '@/styles/pages/_register.scss'

const Register = () => {
  return (
    <div>
      <h2>회원가입</h2>
      <div>
        <div><img src={star} alt=""></img>필수입력사항</div>
        <div>
          <div>아이디<span><img src={star} alt=""></img></span></div>
          <div><div><InputText detail="아이디를 입력해주세요"/></div><div><button>중복확인</button></div></div>
        </div>
        <div>
          <div>비밀번호<span><img src={star} alt=""></img></span></div>
          <div><InputText detail="비밀번호를 입력해주세요"/></div><div></div>
        </div>
        <div>
          <div>비밀번호 확인<span><img src={star} alt=""></img></span></div>
          <div><InputText detail="비밀번호를 한번 더 입력해주세요"/></div><div></div>
        </div>
        <div>
          <div>이름<span><img src={star} alt=""></img></span></div>
          <div><InputText detail="이름을 한번 더 입력해주세요"/></div><div></div>
        </div>
        <div>
          <div>이메일<span><img src={star} alt=""></img></span></div>
          <div><div><InputText detail="예) marketkarly@karly.com"/></div><div><button>중복확인</button></div></div>
        </div>
        <div>
          <div>휴대폰<span><img src={star} alt=""></img></span></div>
          <div><div><InputText detail="숫자를 입력해주세요."/></div><div><button>인증번호 받기</button></div></div>
        </div>
        <div>
          <div>주소<span><img src={star} alt=""></img></span></div>
          <div><button>주소 검색</button><div>배송지에 따라 상품 정보가 달라질 수 있습니다.</div></div><div></div>
        </div>
        <div>
          <div>성별</div>
          <div><label><input type="checkbox"/>남자</label>
          <label><input type="checkbox"/>여자</label>
          <label><input type="checkbox"/>선택안함</label>
          </div><div></div>
        </div>
        <div>
          <div>생년월일</div>
          <div><InputText detail="YYYY / MM / DD"/></div><div></div>
        </div>
        <div>
          <div>추가입력 사항</div>
          <div><label><input type="checkbox"/>친구초대 추천인 아이디</label><label><input type="checkbox"/>참여 이벤트명</label></div><div></div>
        </div>
        <div>
          <div>이용약관동의<span><img src={star} alt=""></img></span></div>
          <div>
            <div><label><input type="checkbox"/>전체 동의합니다</label><p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p></div>
            <div><label><input type="checkbox"/>이용약관 동의 (필수)</label><a>약관보기 <img src={right} alt="" /></a></div>
            <div><label><input type="checkbox"/>개인정보 수집·이용 동의 (필수)</label><a>약관보기 <img src={right} alt="" /></a></div>
            <div><label><input type="checkbox"/>무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)</label><a>약관보기 <img src={right} alt="" /></a></div>
            <div><label><input type="checkbox"/>본인은 만 14세 이상입니다. (필수)</label><a>약관보기 <img src={right} alt="" /></a></div>
          </div>
        </div>
        <div><button>가입하기</button></div>
      </div>
    </div>
  );
};

export default Register;
