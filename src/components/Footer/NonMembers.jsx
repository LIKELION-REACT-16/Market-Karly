import classes from '@/styles/components/Footer/NonMembers.module.scss';
import { Link } from 'react-router-dom';

import Arrow from '@/assets/Arrow.svg';
import LinkMailto from './LinkMailto';

export default function NonMembers(props) {
  const { children, mailto, ...restProps } = props;

  return (
    <div className={classes.frame}>
      <span className={classes.text}>{children}&nbsp;</span>
      <LinkMailto mailto={mailto}>{mailto}</LinkMailto>
    </div>
  );
}
