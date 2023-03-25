import classes from '@/styles/components/Button.module.scss';

export function NormalButton(props) {
  const {
    children,
    color = false,
    width,
    height,
    borderType = false,
    ...restProps
  } = props;
  const combineClassName = `${classes.normal} ${color ? classes.white : ''} ${
    width === '143'
      ? classes.width143
      : width === '333'
      ? classes.width333
      : width === '340'
      ? classes.width340
      : width === '424'
      ? classes.width424
      : width === '155'
      ? classes.width155
      : width === '244'
      ? classes.width244
      : width === '284'
      ? classes.width284
      : width === '174'
      ? classes.width174
      : ''
  } ${height === '54' ? classes.height54 : classes.height44} ${
    borderType ? classes.grayborder : ''
  }`;

  return (
    <button type="button" className={combineClassName}>
      {children}
    </button>
  );
}

export function PopupButton({ children, color, isValid = true, ...restProps }) {
  const combineClassName = `${classes.popup} ${
    color ? classes[`${color}`] : ''
  } ${isValid ? '' : classes.disabled}`;

  return (
    <button
      className={combineClassName}
      disabled={isValid ? false : true}
      {...restProps}
    >
      {children}
    </button>
  );
}

export function FooterButton(props) {
  const { children, ...restProps } = props;

  return (
    <button type="button" className={classes.footer}>
      {children}
    </button>
  );
}
