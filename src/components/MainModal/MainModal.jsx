import classes from './MainModal.module.scss';
import mainModal from '@/assets/img-main-modal.png';
import { useEffect, useRef } from 'react';

export function MainModal() {
  const dialogRef = useRef(null);

  function getCookie(name) {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    if (value) return value[2];
    else return null;
  }

  useEffect(() => {
    // 쿠키가 없으면 모달 띄우기
    getCookie('mainModal') === 'T' ? '' : dialogRef.current.showModal();
    return () => {
      dialogRef.current?.close();
    };
  }, []);

  return (
    <dialog
      className={classes.dialog}
      ref={dialogRef}
      // onClose={(e) => {
      // }}
    >
      <img src={mainModal} alt="메인 모달 이미지" width={440} height={586} />

      <form method="dialog">
        <button
          onClick={(e) => {
            // 쿠키 저장
            let date = new Date();
            date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * 1); // 1일

            let cookie = '';
            cookie = 'mainModal=T;expires=' + date.toUTCString();
            document.cookie = cookie;
          }}
          // value="day"
        >
          오늘 하루 안 보기
        </button>
        <button
          // value={'close'}
          onClick={(e) => {}}
        >
          닫기
        </button>
      </form>
    </dialog>
  );
}
/* --------------------------------- Example -------------------------------- */
// <MainModal />;
