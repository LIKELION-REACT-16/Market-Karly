import classes from './InputText.module.scss'

function InputText(){
  return(
    <input type="text" className={classes.text}/>
  );
}

export default InputText;