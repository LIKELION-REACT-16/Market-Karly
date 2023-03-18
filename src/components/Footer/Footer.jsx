import classes from '@/styles/components/Footer/Footer.module.scss';

import CustomerService from './CustomerService';
import About from './About';
import Guarantee from './Guarantee';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.inner}>
          <div className={classes.innerTop}>
            <CustomerService />
            <About />
          </div>
          <div className={classes.innerBot}>
            <Guarantee />
          </div>
        </div>
        <div className={classes.bot}>
          <div className={classes.botInner}>
            <Copyright />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
