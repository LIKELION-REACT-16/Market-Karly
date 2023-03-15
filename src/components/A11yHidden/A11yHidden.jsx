import { forwardRef } from 'react';
import classes from '@/styles/components/A11yHidden.module.scss';

export const A11yHidden = forwardRef(function A11yHidden(
  /* props */
  { as: Component = 'span', focusable = false, className = '', ...restProps },
  /* ref (forwarding) */
  ref
) {
  const combinedClassNames = `${classes.srOnly} ${
    focusable ? classes.focusable : ''
  } ${className}`.trim();

  return <Component ref={ref} className={combinedClassNames} {...restProps} />;
});

export const srOnlyClassName = classes.srOnly;
