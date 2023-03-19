import classes from '@/components/ModalForm/ModalForm.module.scss';
import { NormalButton, PopupButton } from '..';

export function ModalFormButtons() {
  return (
    <div
      className={classes.ModalFormButtons}
      // style={{ border: '1px solid red' }}
    >
      <div>
        <form method="dialog">
          {/* <button value="close">취소</button> */}
          {/* <button value="confirm">등록</button> */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              padding: '20px 0px 0px',
              borderTop: '1px solid #E1E1E1',
            }}
          >
            <div>
              <PopupButton>취소</PopupButton>
            </div>
            <div>
              <PopupButton color={true} style={{ color: 'white' }}>
                등록
              </PopupButton>
              {/* <PopupButton
                color={true}
                style={{ backgroundColor: '#5f0080', color: 'white' }}
              >
                등록
              </PopupButton> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
