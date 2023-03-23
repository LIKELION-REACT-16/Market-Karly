import classes from '@/styles/components/Footer/SocialNav.module.scss';

import Blog from '@/assets/Blog.svg';
import Facebook from '@/assets/Facebook.svg';
import Instagram from '@/assets/Instagram.svg';
import NaverPost from '@/assets/NaverPost.svg';
import Youtube from '@/assets/Youtube.svg';

import { Link } from 'react-router-dom';

export default function SocialNav() {
  return (
    <nav className={classes.social}>
      <SocialLink />
    </nav>
  );
}

function SocialLink({ link, src, alt }) {
  const socialList = [
    {
      key: 1,
      name: '네이버 블로그',
      logo: Blog,
      link: 'https://section.blog.naver.com',
    },
    {
      key: 2,
      name: '페이스북',
      logo: Facebook,
      link: 'https://www.facebook.com',
    },
    {
      key: 3,
      name: '인스타그램',
      logo: Instagram,
      link: 'https://www.instagram.com',
    },
    {
      key: 4,
      name: '네이버 포스트',
      logo: NaverPost,
      link: 'https://post.naver.com',
    },
    {
      key: 5,
      name: '유튜브',
      logo: Youtube,
      link: 'https://www.youtube.com/',
    },
  ];

  return (
    <ul className={classes.socialUl}>
      {socialList.map((item) => (
        <li className={classes.socialLi} key={item.key}>
          <Link className={classes.socialLink} to={item.link}>
            <img
              className={classes.socialImg}
              src={item.logo}
              alt={item.name}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
