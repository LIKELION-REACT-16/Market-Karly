import RouteLink from '@/components/RouteLink';
import Test from '@/components/Test';
import star from '@/assets/star.svg';
import right from '@/assets/right.svg';
import '@/styles/pages/_register.scss';
import React, { useState } from 'react';
import { NormalButton } from '@/components/Button';

function Register() {
  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');
  const [PWCheck, setPWCheck] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');

  const [IDValid, setIDValid] = useState(false);
  const [PWValid, setPWValid] = useState(false);
  const [PWCheckValid, setPWCheckValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const signUpBtn = (e) => {
    // 사용자의 입력값을 받아서 세션에 저장한다.
    sessionStorage.setItem('ID', ID);
    sessionStorage.setItem('PW', PW);
  };

  const onlyNumber = (e) => {
    const regexp = /\D/g;
    event.target.value = event.target.value.replace(regexp, '');
    e.target.value = e.target.value.replace(regexp, '');
    setPhone(e.target.value);
  };

  const onlyNumber2 = (e) => {
    const regexp = /\D/g;
    event.target.value = event.target.value.replace(regexp, '');
    e.target.value = e.target.value.replace(regexp, '');
    setBirthday(e.target.value);
  };

  const handleID = (e) => {
    setID(e.target.value);
    const regex = /^[A-za-z0-9]{6,16}$/;
    if (regex.test(e.target.value)) {
      setIDValid(true);
    } else {
      setIDValid(false);
    }
  };

  const handlePW = (e) => {
    setPW(e.target.value);
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
    if (regex.test(e.target.value)) {
      setPWValid(true);
    } else {
      setPWValid(false);
    }
  };

  const handlePWCheck = (e) => {
    setPWCheck((prev) => e.target.value);
    if (PW == PWCheck) {
      setPWCheckValid(true);
    } else {
      setPWCheckValid(false);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  return (
    <main>
      <h2>회원가입</h2>
      <form>
        <div className="essential">
          {' '}
          <img src={star} className="star" alt=""></img>필수입력사항
        </div>
        <div className="privacy">
          <div className="element">
            아이디
            <span>
              <img src={star} className="star" alt=""></img>
            </span>
          </div>
          <div className="RegisterVal">
            <input
              type=" text"
              className="InputPrivacy"
              placeholder="ID를 입력해주세요"
              value={ID}
              onChange={handleID}
            />
            <div className="errorMessage">
              {!IDValid && ID.length > 0 && <div>6자 이상 16자 이하</div>}
            </div>
          </div>
          <div>
            <NormalButton color="white" width="143">
              <span>중복확인</span>
            </NormalButton>
          </div>
        </div>
        <div className="privacy">
          <div className="element">
            비밀번호
            <span>
              <img src={star} className="star" alt=""></img>
            </span>
          </div>
          <div className="RegisterVal">
            <input
              type="password"
              className="InputPrivacy"
              placeholder="비밀번호를 입력해주세요"
              value={PW}
              onChange={handlePW}
            />
            <div className="errorMessage">
              {!PWValid && PW.length > 0 && (
                <div>8자리 이상의 영문과 숫자를 조합</div>
              )}
            </div>
          </div>
          <div></div>
        </div>
        <div className="privacy">
          <div className="element">
            비밀번호 확인
            <span>
              <img src={star} className="star" alt=""></img>
            </span>
          </div>
          <div className="RegisterVal">
            <input
              type="password"
              className="InputPrivacy"
              placeholder="비밀번호를 한번 더 입력해주세요"
              value={PWCheck}
              onInput={handlePWCheck}
            />
            <div className="errorMessage">
              {!PWCheckValid && PWCheck.length > 0 && (
                <div>동일한 비밀번호를 입력</div>
              )}
            </div>
          </div>
          <div></div>
        </div>
        <div className="privacy">
          <div className="element">
            이름
            <span>
              <img src={star} className="star" alt=""></img>
            </span>
          </div>
          <div>
            <input
              type="text"
              className="InputPrivacy"
              placeholder="이름을 입력해주세요"
            />
          </div>
          <div></div>
        </div>
        <div className="privacy">
          <div className="element">
            이메일
            <span>
              <img src={star} className="star" alt=""></img>
            </span>
          </div>
          <div className="RegisterVal">
            <input
              type="email"
              className="InputPrivacy"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={handleEmail}
            />
            <div className="errorMessage">
              {!emailValid && email.length > 0 && (
                <div>이메일 형식으로 입력해주세요</div>
              )}
            </div>
          </div>
          <div>
            <NormalButton color="white" width="143">
              <span>중복확인</span>
            </NormalButton>
          </div>
        </div>
        <div className="privacy">
          <div className="element">
            휴대폰
            <span>
              <img src={star} className="star" alt=""></img>
            </span>
          </div>
          <div>
            <input
              type="text"
              className="InputPrivacy"
              placeholder="숫자만 입력해주세요"
              onInput={onlyNumber}
              value={phone}
            />
          </div>
          <div>
            <NormalButton color="white" width="143">
              <span>인증번호 받기</span>
            </NormalButton>
          </div>
        </div>
        <div className="privacy">
          <div className="element">
            주소
            <span>
              <img src={star} className="star" alt=""></img>
            </span>
          </div>
          <div>
            <NormalButton color="white" width="333">
              <span>주소 검색</span>
            </NormalButton>
            <p>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
          </div>
          <div></div>
        </div>
        <div className="privacy">
          <div className="element">성별</div>
          <div>
            <input type="radio" name="sex" />
            <label>남자</label>
            <input type="radio" name="sex" />
            <label>여자</label>
            <input type="radio" name="sex" />
            <label>선택안함</label>
          </div>
          <div></div>
        </div>
        <div className="privacy">
          <div className="element">생년월일</div>
          <div>
            <input
              type="text"
              className="InputPrivacy"
              placeholder="YYYY / MM / DD"
              onInput={onlyNumber2}
              value={birthday}
            />
          </div>
          <div></div>
        </div>
        <div className="privacy">
          <div className="element">추가입력 사항</div>
          <div>
            <input type="radio" name="friend" />
            <label>친구초대 추천인 아이디</label>
            <input type="radio" name="friend" />
            <label>참여 이벤트명</label>
          </div>
          <div></div>
        </div>
        <div className="agreement">
          <div className="element">
            이용약관동의
            <span>
              <img src={star} className="star" alt=""></img>
            </span>
          </div>
          <div>
            <div>
              <label>
                <input type="checkbox" />
                <span className="AllAgreement">전체 동의합니다</span>
              </label>
              <p className="LightP">
                선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를
                이용할 수 있습니다.
              </p>
            </div>
            <div className="terms">
              <label>
                <input type="checkbox" />
                이용약관 동의 (필수)
              </label>
              <a className="SeeTerms">
                약관보기 <img src={right} alt="" />
              </a>
            </div>
            <div className="terms">
              <label>
                <input type="checkbox" />
                개인정보 수집·이용 동의 (필수)
              </label>
              <a className="SeeTerms">
                약관보기 <img src={right} alt="" />
              </a>
            </div>
            <div className="terms">
              <label>
                <input type="checkbox" />
                무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)
              </label>
              <a className="SeeTerms">
                약관보기 <img src={right} alt="" />
              </a>
            </div>
            <div className="terms">
              <label>
                <input type="checkbox" />
                본인은 만 14세 이상입니다. (필수)
              </label>
              <a className="SeeTerms">
                약관보기 <img src={right} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="SignUp">
          <NormalButton id="" width="340" height="54" onClick={signUpBtn}>
            <span>가입하기</span>
          </NormalButton>
        </div>
      </form>
    </main>
  );
}

export default Register;
