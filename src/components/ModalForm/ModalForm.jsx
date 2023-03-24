import { forwardRef, useId } from 'react';
import classes from '@/components/ModalForm/ModalForm.module.scss';
import { ModalFormTitle } from './ModalFormTitle';
import { ModalFormProduct } from './ModalFormProduct';
import { ModalFormDetail } from './ModalFormDetail';
import { ModalFormButtons } from './ModalFormButtons';

const ModalForm = (
  { productName = '[풀무원] 탱탱쫄면 (4개입)', type = 'review', ...restProps },
  ref
) => {
  const title =
    type === 'review'
      ? '후기 작성'
      : type === 'inquiry'
      ? '상품 문의하기'
      : '모달 등록 폼';

  return (
    <dialog ref={ref} className={classes.ModalForm}>
      <ModalFormTitle title={title} modal={ref} />
      <ModalFormProduct
        src="http://via.placeholder.com/72x72"
        productName="[풀무원] 탱탱쫄면 (4개입)"
      />
      <ModalFormDetail type={type} />
      <ModalFormButtons />
    </dialog>
  );
};
export default forwardRef(ModalForm);

/* --------------------------------- Example -------------------------------- */
// const reviewModalRef = useRef();
// <button
//   onClick={() => {
//     reviewModalRef.current.showModal();
//   }}
// >
//   click
// </button>;
// <ModalForm ref={reviewModalRef} type="review"></ModalForm>;
