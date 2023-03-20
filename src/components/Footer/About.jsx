import classes from '@/styles/components/Footer/About.module.scss';

import FooterNav from './FooterNav';
import Area from './Area';
import SocialNav from './SocialNav';

export default function About() {
  return (
    <div className={classes.about}>
      <FooterNav />
      <Area />
      <SocialNav />
    </div>
  );
}
