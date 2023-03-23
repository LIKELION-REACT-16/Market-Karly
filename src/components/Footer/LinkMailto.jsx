import classes from '@/styles/components/Footer/LinkMailto.module.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import Arrow from '@/assets/Arrow.svg';

export default function LinkMailto({ mailto }) {
  return (
    <Link
      className={classes.mailto}
      to="#"
      onClick={(e) => {
        window.location.href = `mailto:${mailto}`;
        e.preventDefault();
      }}
    >
      <span className={classes.text}>{mailto}</span>
      <img src={Arrow} alt="더보기" className={classes.more} />
    </Link>
  );
}
