import classes from '@/styles/components/Footer/FooterNav.module.scss';
import { Link } from 'react-router-dom';

export default function FooterNav() {
  return (
    <nav className="footerNav">
      <NavList />
    </nav>
  );
}

function NavList() {
  const navList = [
    { key: 'intro', to: '/', text: '칼리소개' },
    { key: 'video', to: '/', text: '칼리소개영상' },
    { key: 'employ', to: '/', text: '인재채용' },
    { key: 'terms', to: '/', text: '이용약관' },
    { key: 'policy', to: '/', text: '개인정보처리방침' },
    { key: 'info', to: '/', text: '이용안내' },
  ];

  return (
    <ul className={classes.footerNavList}>
      {navList.map((item) => (
        <li key={item.key}>
          <Link to={item.to}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
}
