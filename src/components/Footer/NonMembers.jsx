import classes from '@/styles/components/Footer/NonMembers.module.scss';
import { Link } from 'react-router-dom';

import Arrow from '@/assets/Arrow.svg';

export default function NonMembers(props) {
  const { children, mailto, ...restProps } = props;

  return (
    <div className={classes.frame}>
      <span>{children}&nbsp;</span>
      <ButtonMailto mailto={mailto}>{mailto}</ButtonMailto>
    </div>
  );
}

function ButtonMailto({ mailto }) {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = `mailto:${mailto}`;
        e.preventDefault();
      }}
    >
      <span>{mailto}</span>
      <img className="More" src={Arrow} alt="더보기" />
    </Link>
  );
}
