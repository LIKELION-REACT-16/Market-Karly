import { forwardRef, useRef, useState } from 'react';
import classes from '@/components/ModalForm/ModalForm.module.scss';
import { ModalFormTitle } from './ModalFormTitle';
import { ModalFormProduct } from './ModalFormProduct';
import ModalFormDetail from './ModalFormDetail';
import { ModalFormButtons } from './ModalFormButtons';

const ModalForm = (
  {
    productName = '[풀무원] 탱탱쫄면 (4개입)',
    type = 'review',
    state,
    setState,
    ...restProps
  },
  ref
) => {
  const title =
    type === 'review'
      ? '후기 작성'
      : type === 'inquiry'
      ? '상품 문의하기'
      : '모달 등록 폼';

  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [isSecret, setIsSecret] = useState(false);

  const isValid = titleValue.length > 0 && contentValue.length > 0;

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

  const onSubmitHandler = (e) => {
    if (type === 'review') {
      setState([
        ...state,
        {
          id: state.length + 1,
          userName: '홍길동',
          // 모달창의 상품명 데이터를 받아와서 넣어주기
          productName: '[풀무원] 탱탱쫄면 (4개입)',
          reviewTitle: titleValue,
          reviewContent: contentValue,
          reviewDate: Date.now(),
          // 1~5 사이의 랜덤한 숫자
          recommend: Math.floor(Math.random() * 5) + 1,
        },
      ]);
    } else if (type === 'inquiry') {
      setState([
        ...state,
        {
          id: state.length + 1,
          userName: '홍길동',
          // 모달창의 상품명 데이터를 받아와서 넣어주기
          productName: '[풀무원] 탱탱쫄면 (4개입)',
          inquiryTitle: titleValue,
          inquiryContent: contentValue,
          isSecret: isSecret,
          inquiryDate: Date.now(),
          answer: null,
          answerDate: null,
          isFinished: false,
        },
      ]);
    }
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
      <ModalFormButtons isValid={isValid} onSubmitHandler={onSubmitHandler} />
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
