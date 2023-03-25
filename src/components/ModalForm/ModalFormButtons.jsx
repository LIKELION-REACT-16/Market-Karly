import classes from '@/components/ModalForm/ModalForm.module.scss';
import { PopupButton } from '@/components/Button';

export function ModalFormButtons({ isValid = true, ...restProps }) {
  return (
    <form method="dialog" className={classes.buttonWrapper}>
      <PopupButton type="submit" value="close">
        <span>취소</span>
      </PopupButton>
      <PopupButton
        type="submit"
        value="confirm"
        color={isValid ? 'primary' : 'gray'}
        isValid={isValid}
      >
        <span>등록</span>
      </PopupButton>
    </form>
  );
}

{
  /* <button value="close">취소</button>
<button value="confirm">등록</button> */
}
