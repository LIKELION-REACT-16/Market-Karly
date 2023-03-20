import { Link } from 'react-router-dom';
import classes from '@/components/Header/userMenu.module.scss';

export default function UserMenu() {
  const menuInfoList = [
    { key: 'register', to: '/Register', text: '회원가입' },
    { key: 'login', to: '/Login', text: '로그인' },
    { key: 'customerService', to: '/', text: '고객센터' },
  ];

  return (
    <ul className={classes.userMenuList}>
      {menuInfoList.map((item) => (
        <li key={item.key}>
          <Link to={item.to}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
}
