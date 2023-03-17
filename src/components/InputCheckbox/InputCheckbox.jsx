import { useId } from 'react';
import { A11yHidden } from '@/components';
import classes from '@/styles/components/InputCheckbox.module.scss';

export function InputCheckbox({
  label,
  type = 'checkbox',
  invisibleInput = true,
  invisibleLabel = false,
  inline = false,
  vertical = false,
  style,
  labelStyle,
  ...restProps
}) {
  const id = useId();
  const combineClassNames = `${classes.control} ${
    inline ? classes.control_inline : ''
  } ${vertical ? classes.control_vertical : ''}`;

  return (
    <div className={combineClassNames} style={style}>
      {renderInput(id, type, invisibleInput, restProps)}
      {renderLabel(id, label, invisibleLabel, labelStyle)}
    </div>
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

function renderLabel(id, label, invisibleLabel, labelStyle) {
  return invisibleLabel ? (
    <A11yHidden
      as="label"
      htmlFor={id}
      className={classes.label}
      style={labelStyle}
    >
      {label}
    </A11yHidden>
  ) : (
    <label htmlFor={id} className={classes.label} style={labelStyle}>
      {label}
    </label>
  );
}

/* --------------------------------- Example -------------------------------- */
//  <InputCheckbox
//  label={'비밀글로 문의하기'}
//  type="checkbox"
//  invisibleInput={true}
//  invisibleLabel={false}
//  inline={true}
//  vertical={false}
//  style={{ margin: '0 0 1rem 0' }}
//  labelStyle={{ color: 'black'}}
//  />;
