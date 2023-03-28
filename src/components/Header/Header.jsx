import UserMenu from './UserMenu';
import SearchBar from './SearchBar';
import Nav from './Nav';
import classes from '@/components/Header/header.module.scss';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scroll_state, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 105) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={classes.headerComp}>
      <UserMenu />
      <SearchBar />
      <div
        className={classes.gapDiv}
        style={scroll_state ? { display: 'block' } : { display: 'none' }}
      ></div>
      <Nav scroll_state={scroll_state} />
    </header>
  );
}
