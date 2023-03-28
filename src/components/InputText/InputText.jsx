import classes from './InputText.module.scss'

function InputText(props){
  return(
    <input type="text" className={classes.text} placeholder={props.detail} />
  );
}

export default InputText;