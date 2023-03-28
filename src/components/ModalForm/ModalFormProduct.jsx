import classes from '@/components/ModalForm/ModalForm.module.scss';

export function ModalFormProduct({
  src = 'http://via.placeholder.com/72x72',
  productName = '[풀무원] 탱탱쫄면 (4개입)',
}) {
  return (
    <div className={classes.modalFormProduct}>
      <img src={src} alt="상품 이미지" />
      <p>{productName}</p>
    </div>
  );
}
/* --------------------------------- Example -------------------------------- */
// <ModalFormProduct />;
