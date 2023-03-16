import { forwardRef, useId } from 'react';
import { InputCheckbox } from '..';
import classes from '@/styles/components/ModalForm.module.scss';

export const ModalForm = forwardRef(
  (
    {
      title = '작성 모달 폼',
      productName = '[풀무원] 탱탱쫄면 (4개입)',
      type = 'review',
      ...restProps
    },
    ref
  ) => {
    // const id = useId();
    // console.log(id);
    return (
      <dialog ref={ref}>
        <div>
          <h4>{title}</h4>
          <button>x버튼</button>
        </div>

        <div>
          <img src="http://via.placeholder.com/40x80" alt="상품 이미지" />
          <p>{productName}</p>
        </div>

        <div>
          <p>제목</p>
          {/* <input type="text" name={id} id={id} /> */}
          <input
            type="text"
            name="inputtext"
            id="inputtext"
            placeholder="제목을 입력해주세요."
          />
          <p>내용</p>

          {/* 이 textarea 부분 컴포넌트로 빼내거나 if문으로(후기 작성이냐, 상품 문의하기냐) */}
          {/* <textarea name={id} id={id} cols="30" rows="10"> */}
          <textarea
            name="txtarea"
            id="txtarea"
            cols="30"
            rows="10"
            defaultValue="컬리는 믿을 수 있는..."
            readOnly
          >
            {/* 컬리는 믿을 수 있는... */}
          </textarea>

          {type === 'inquiry' && <InputCheckbox label={'비밀글로 문의하기'} />}
        </div>

        <div>
          <form method="dialog">
            <button value="close">취소</button>
            <button value="confirm">등록</button>
          </form>
        </div>
      </dialog>
    );
  }
);
