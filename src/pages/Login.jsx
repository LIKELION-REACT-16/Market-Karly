import RouteLink from '@/components/RouteLink';
import Test from '@/components/Test';
import InputText from '@/components/InputText/InputText';
import '@/styles/pages/_login.scss';
import { NormalButton } from '@/components/Button';
import { Link } from 'react-router-dom';

function Login() {
  const signInBtn = (e) => {
    const url = location.href;
    const lowerCase = url.toLowerCase();
    const lastIndexOf = lowerCase.lastIndexOf('login');
    location.href = url.substring(0, lastIndexOf);
  };

  return (
    <main>
      <h2>로그인</h2>
      <form>
        <InputText detail="아이디를 입력해주세요" />
        <InputText detail="비밀번호를 입력해주세요" />
        <div className="find">
          <a href="">아이디 찾기</a>
          <span>|</span>
          <a href="">비밀번호 찾기</a>
        </div>
        <div className="LoginBtn">
          <NormalButton width="340" height="54" onClick={signInBtn}>
            <span>로그인</span>
          </NormalButton>
        </div>
        <Link to={'/Register'}>
          <NormalButton color="white" width="340" height="54">
            <span>회원가입</span>
          </NormalButton>
        </Link>
      </form>
    </main>
  );
}

export default Login;
