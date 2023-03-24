import { ReactComponent as Cancel } from '@/assets/img-cancel.svg';
import classes from '@/components/ModalForm/ModalForm.module.scss';

export function ModalFormTitle({ title, modal, ...restProps }) {
  const CancelHandler = () => {
    modal.current.close();
  };

  return (
    <div className={classes.ModalFormTitle}>
      <h4 className={classes.ModalFormTitleContent}>{title}</h4>
      <Cancel
        className={classes.Cancel}
        onClick={CancelHandler}
        {...restProps}
      />
    </div>
  );
}

/* --------------------------------- Example -------------------------------- */
// <ModalFormTitle title={title} />;
