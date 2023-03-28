import classes from '@/components/ModalForm/ModalForm.module.scss';
import { forwardRef } from 'react';
import { InputCheckbox } from '..';
import ModalFormTextarea from './ModalFormTextarea';

const ModalFormDetail = (
  {
    type,
    titleValue,
    onTitleValueChangeHandler,
    contentValue,
    onContentValueChangeHandler,
    isSecret,
    onSecretChangeHandler,
    ...restProps
  },
  ref
) => {
  return (
    <div className={classes.modalFormDetail}>
      <div className={classes.inner}>
        {/* 제목 */}
        <div className={classes.titleWrapper}>
          <div className={classes.title}>
            <label htmlFor="title">제목</label>
          </div>
          <div className={classes.inputText}>
            <input
              id="title"
              type="text"
              placeholder="제목을 입력해주세요."
              value={titleValue}
              onChange={onTitleValueChangeHandler}
            />
          </div>
        </div>

        {/* 내용 */}
        <div className={classes.descWrapper}>
          <div className={classes.title}>
            <label htmlFor="content">내용</label>
          </div>

          <ModalFormTextarea
            type={type}
            contentValue={contentValue}
            onContentValueChangeHandler={onContentValueChangeHandler}
            ref={ref}
          />
        </div>

        {/* 상품 문의하기 시 체크박스 옵션 */}
        {type === 'inquiry' && (
          <InputCheckbox
            label={'비밀글로 문의하기'}
            style={{ paddingLeft: '100px' }}
            checked={isSecret}
            onChange={onSecretChangeHandler}
          />
        )}
      </div>
    </div>
  );
};

export default forwardRef(ModalFormDetail);
