import classes from '@/components/ProductDetailView/ButtonPrevNext/ButtonPrevNext.module.scss';

export function ButtonPrevNext({ ariaLabel = '이전 페이지 버튼', className }) {
  ButtonPrevNext;

  const combineClassNames = `${classes.ButtonPrevNext} ${classes[className]}`;
  console.log(combineClassNames);

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      // className={classes[className]}
      className={combineClassNames}
    ></button>
  );
}

/* ----------------------------------- Example ----------------------------------- */
// <ButtonPrevNext
//   ariaLabel="상품 후기 다음 페이지 버튼"
//   className="next-active"
// />;
