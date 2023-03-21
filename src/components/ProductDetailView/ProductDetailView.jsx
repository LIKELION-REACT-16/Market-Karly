import classes from '@/components/ProductDetailView/ProductDetailView.module.scss';
import { forwardRef } from 'react';
import { Inquiry } from './Inquiry';
import { Review } from './Review';
import { ReviewInquiryHeader } from './ReviewInquiryHeader';

export const ProductDetailView = forwardRef(({ type, id }, ref) => {
  return (
    <section id={id} ref={ref} className={classes.ProductDetailView}>
      <ReviewInquiryHeader type={type} />
      {type === 'review' ? (
        <Review></Review>
      ) : type === 'inquiry' ? (
        <Inquiry></Inquiry>
      ) : null}
    </section>
  );
});

export default ProductDetailView;

/* --------------------------------- Example -------------------------------- */
// <ProductDetailView type={'review'}></ProductDetailView>
// <ProductDetailView type={'inquiry'}></ProductDetailView>
