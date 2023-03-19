// 해당 jsx 파일은 Button 컴포넌트의 사용법을 나타내기 위해 제작하였음

import { Routes, Route } from 'react-router-dom';
import { FooterButton, NormalButton, PopupButton } from '@/components/Button';

const ButtonTest = () => {
  return (
    <div>
      {/* Register */}
      <h3>Register</h3>
      <NormalButton color="white" width="143">
        <span>중복확인</span>
      </NormalButton>
      <br />
      <NormalButton color="white" width="143">
        <span>인증번호 받기</span>
      </NormalButton>
      <br />
      <NormalButton color="white" width="333">
        <span>주소 검색</span>
      </NormalButton>
      <br />
      <NormalButton width="340" height="54">
        <span>가입하기</span>
      </NormalButton>
      <br />

      {/* Login */}
      <h3>Login</h3>
      <NormalButton color="white" width="340" height="54">
        <span>로그인</span>
      </NormalButton>
      <br />
      <NormalButton width="340" height="54">
        <span>회원가입</span>
      </NormalButton>
      <br />

      {/* Product Detail */}
      <h3>Product</h3>
      <NormalButton width="340" height="54">
        <span>장바구니 담기</span>
      </NormalButton>
      <br />
      <NormalButton width="155" height="44">
        <span>후기 작성하기</span>
      </NormalButton>
      <br />
      <NormalButton width="155" height="44">
        <span>문의하기</span>
      </NormalButton>
      <br />

      {/* Cart */}
      <h3>Cart</h3>
      <NormalButton color="true" width="244" height="44">
        <span>배송지 변경</span>
      </NormalButton>
      <br />
      <NormalButton width="284" height="44">
        <span>주문하기</span>
      </NormalButton>
      <br />

      {/* Add Cart */}
      <h3>Add Cart</h3>
      <NormalButton color="true" width="174" height="54" borderType="true">
        <span>취소</span>
      </NormalButton>
      <br />
      <NormalButton width="174" height="54">
        <span>장바구니 담기</span>
      </NormalButton>
      <br />

      {/* POPUP / Product Review */}
      <h3>POPUP</h3>
      <PopupButton>
        <span>취소</span>
      </PopupButton>
      <br />
      <PopupButton color="true">
        <span>등록</span>
      </PopupButton>
      <br />

      {/* Footer */}
      <h3>Footer</h3>
      <FooterButton>카카오톡 문의</FooterButton>
      <br />
      <FooterButton>1:1 문의</FooterButton>
      <br />
      <FooterButton>대량주문 문의</FooterButton>
      <br />
    </div>
  );
};

export default ButtonTest;
