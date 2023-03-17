import { useId } from 'react';
import { A11yHidden } from '@/components';
import classes from '@/styles/components/InputCheckbox.module.scss';

export function InputCheckbox({
  label,
  type = 'checkbox',
  invisibleLabel = false,
  invisibleInput = true,
  vertical = false,
  style,
  ...restProps
}) {
  const id = useId();
  const combineClassNames = `${classes.control} ${
    vertical ? classes.control_vertical : ''
  }`;

  return (
    <div className={combineClassNames} style={style}>
      {renderInput(id, type, invisibleInput, restProps)}
      {renderLabel(id, label, invisibleLabel)}
    </div>
  );
}

function renderLabel(id, label, invisibleLabel) {
  return invisibleLabel ? (
    <A11yHidden as="label" htmlFor={id} className={classes.label}>
      {label}
    </A11yHidden>
  ) : (
    <label htmlFor={id} className={classes.label}>
      {label}
    </label>
  );
}

function renderInput(id, type, invisibleInput, restProps) {
  return invisibleInput ? (
    <A11yHidden
      as="input"
      id={id}
      type={type}
      className={classes.input}
      {...restProps}
    ></A11yHidden>
  ) : (
    <input id={id} type={type} className={classes.input} {...restProps} />
  );
}

/* --------------------------------- Example -------------------------------- */
//  <InputCheckbox
//  label={'비밀글로 문의하기'}
//  type="checkbox"
//  invisibleInput={true}
//  />;
