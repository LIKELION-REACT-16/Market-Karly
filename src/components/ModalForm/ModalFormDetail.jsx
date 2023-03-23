import classes from '@/components/ModalForm/ModalForm.module.scss';
import { InputCheckbox } from '..';
import { ModalFormTextarea } from './ModalFormTextarea';

export function ModalFormDetail({ type }) {
  return (
    <div className={classes.ModalFormDetail}>
      <div className={classes.inner}>
        <div className={classes.titleWrapper}>
          <div className={classes.title}>
            <label htmlFor="hello">제목</label>
          </div>
          <div className={classes.inputText}>
            <input id="hello" type="text" placeholder="제목을 입력해주세요." />
          </div>
        </div>

        <div className={classes.descWrapper}>
          <div className={classes.title}>
            <label htmlFor="world">내용</label>
          </div>

          <ModalFormTextarea type={type} />
        </div>

        {/* 상품 문의하기 */}
        {type === 'inquiry' && (
          <div style={{ paddingLeft: '101px' }}>
            <InputCheckbox
              label={'비밀글로 문의하기'}
              style={{ paddingLeft: '80px' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
