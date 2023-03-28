import { useId, useState } from 'react';
import { A11yHidden } from '@/components';
import classes from './InputCheckbox.module.scss';
import classNames from 'classnames';
export function InputCheckbox({
  // type = 'checkbox',
  // isChecked = false,
  // name,
  // value,
  // onChangeHandler = () => {},
  // invisibleInput = true,
  // invisibleLabel = false,
  inline = true,
  // vertical = false,
  style,
  label = '',
  labelClasses = [''],
  ...restProps
}) {
  const id = useId();
  const combineClassNames = `${classes.control} ${
    inline ? classes.control_inline : ''
  }`;

  return (
    <div className={combineClassNames} style={style}>
      <input
        type="checkbox"
        // checked={isChecked}
        // onChange={(e) => setCheck(e.target.checked)}
        id={id}
        // name={name}
        // value={value}
        // onChange={onChangeHandler}
        className={classes.input}
        {...restProps}
      />
      <label
        htmlFor={id}
        className={classNames(labelClasses.map((item) => classes[item]))}
      >
        {label}
      </label>
    </div>
  );
}
// function renderInput(id, isChecked, onChange, restProps) {
//   // const [check, setCheck] = useState(isChecked);

//   return (
//     <input
//       checked={check}
//       // onChange={(e) => setCheck(e.target.check)}
//       onChange={onChange}
//       value={undefined || ''}
//       id={id}
//       // type={type}
//       className={classes.input}
//       {...restProps}
//     />
//   );
// }

// function renderLabel(id, label, labelClasses) {
//   // const combineClassNames = labelClasses.map((item) => classes[item]);

//   return (
//     <label
//       htmlFor={id}
//       className={classNames(labelClasses.map((item) => classes[item]))}
//     >
//       {label}
//     </label>
//   );
// }

/* --------------------------------- Example -------------------------------- */
// <InputCheckbox
//   label={'비밀글로 문의하기'}
//   style={{ paddingLeft: '100px' }}
//   checked={isSecret}
//   onChange={onSecretChangeHandler}
//   labelClasses={['label-large', 'content', 'hover']}
// />
