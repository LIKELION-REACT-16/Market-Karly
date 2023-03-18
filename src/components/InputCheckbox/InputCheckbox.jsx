import { useId, useState } from 'react';
import { A11yHidden } from '@/components';
import classes from '@/styles/components/InputCheckbox.module.scss';
import classNames from 'classnames';
export function InputCheckbox({
  checked = false,
  type = 'checkbox',
  invisibleInput = true,
  invisibleLabel = false,
  inline = false,
  vertical = false,
  style,
  label,
  labelClasses = [],
  ...restProps
}) {
  const id = useId();
  const combineClassNames = `${classes.control} ${
    inline ? classes.control_inline : ''
  } ${vertical ? classes.control_vertical : ''}`;

  return (
    <div className={combineClassNames} style={style}>
      {renderInput(id, checked, type, invisibleInput, restProps)}
      {renderLabel(id, label, invisibleLabel, labelClasses)}
    </div>
  );
}
function renderInput(id, checked, type, invisibleInput, restProps) {
  const [check, setCheck] = useState(checked);

  return invisibleInput ? (
    <A11yHidden
      as="input"
      checked={check}
      onChange={(e) => setCheck(e.target.checked)}
      id={id}
      type={type}
      className={classes.input}
      {...restProps}
    ></A11yHidden>
  ) : (
    <input
      checked={check}
      onChange={(e) => setCheck(e.target.checked)}
      id={id}
      type={type}
      className={classes.input}
      {...restProps}
    />
  );
}

function renderLabel(id, label, invisibleLabel, labelClasses) {
  const combineClassNames = labelClasses.map((item) => classes[item]);

  return invisibleLabel ? (
    <A11yHidden
      as="label"
      htmlFor={id}
      className={classNames(combineClassNames)}
    >
      {label}
    </A11yHidden>
  ) : (
    // <label htmlFor={id} className={>
    <label htmlFor={id} className={classNames(combineClassNames)}>
      {label}
    </label>
  );
}

/* --------------------------------- Example -------------------------------- */
//  <InputCheckbox
//  checked={true}
//  label={'전체 동의합니다.'}
//  inline={true}
//  style={{ margin: '0 0 1rem 0' }}
//  labelClasses={['label-large', 'content', 'hover']}
//  />;
