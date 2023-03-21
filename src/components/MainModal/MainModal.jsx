import classes from './MainModal.module.scss';
import mainModal from '@/assets/img-main-modal.png';

export function MainModal() {
  return (
    <dialog open className={classes.dialog}>
      <img src={mainModal} alt="메인 모달 이미지" width={440} height={586} />
      <div>
        <button>오늘 하루 안 보기</button>
        <button>닫기</button>
      </div>
    </dialog>
  );
}
/* --------------------------------- Example -------------------------------- */
// <MainModal />;
