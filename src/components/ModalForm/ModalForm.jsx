import { forwardRef, useRef, useState } from 'react';
import classes from '@/components/ModalForm/ModalForm.module.scss';
import { ModalFormTitle } from './ModalFormTitle';
import { ModalFormProduct } from './ModalFormProduct';
import ModalFormDetail from './ModalFormDetail';
import { ModalFormButtons } from './ModalFormButtons';

const ModalForm = (
  { productName = '[풀무원] 탱탱쫄면 (4개입)', type = 'review', ...restProps },
  ref
) => {
  // console.log(`ModalForm render`);
  const title =
    type === 'review'
      ? '후기 작성'
      : type === 'inquiry'
      ? '상품 문의하기'
      : '모달 등록 폼';

  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [isSecret, setIsSecret] = useState(false);

  const isValid = useState(true);

  const placeholderRef = useRef();

  const onTitleValueChangeHandler = (e) => {
    setTitleValue(e.target.value);
  };

  const onContentValueChangeHandler = (e) => {
    setContentValue(
      e.target.value.length > 10
        ? e.target.value.substring(0, 10)
        : e.target.value
    );
  };

  const onSecretChangeHandler = (e) => {
    setIsSecret(e.target.checked);
  };

  return (
    <dialog
      ref={ref}
      className={classes.modalForm}
      onClose={(e) => {
        // clean up 제목, 내용, placeholder, + inquiry ? 비밀글 체크박스
        setTitleValue('');
        setContentValue('');
        placeholderRef.current.classList.remove(`${classes.hidden}`);
        if (type === 'inquiry') {
          setIsSecret(false);
        }
      }}
    >
      <ModalFormTitle title={title} modal={ref} />
      <ModalFormProduct
        src="http://via.placeholder.com/72x72"
        productName="[풀무원] 탱탱쫄면 (4개입)"
      />
      <ModalFormDetail
        type={type}
        titleValue={titleValue}
        onTitleValueChangeHandler={onTitleValueChangeHandler}
        contentValue={contentValue}
        onContentValueChangeHandler={onContentValueChangeHandler}
        isSecret={isSecret}
        onSecretChangeHandler={onSecretChangeHandler}
        ref={placeholderRef}
      />
      <ModalFormButtons isValid={isValid} />
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
