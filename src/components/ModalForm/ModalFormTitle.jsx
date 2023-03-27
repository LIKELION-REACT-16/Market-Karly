import { ReactComponent as Cancel } from '@/assets/img-cancel.svg';
import classes from '@/components/ModalForm/ModalForm.module.scss';

export function ModalFormTitle({ title, modal, ...restProps }) {
  const CancelHandler = () => {
    modal.current.close();
  };

  return (
    <div className={classes.modalFormTitle}>
      <h4 className={classes.modalFormTitleContent}>{title}</h4>
      <Cancel
        className={classes.cancel}
        onClick={CancelHandler}
        {...restProps}
      />
    </div>
  );
}

/* --------------------------------- Example -------------------------------- */
// <ModalFormTitle title={title} />;
