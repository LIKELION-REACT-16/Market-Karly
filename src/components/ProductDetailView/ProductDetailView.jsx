import classes from '@/components/ProductDetailView/ProductDetailView.module.scss';
import { Inquiry } from './Inquiry';
import { Review } from './Review';
import { ReviewInquiryHeader } from './ReviewInquiryHeader';

export function ProductDetailView({ type }) {
  return (
    <div className={classes.ProductDetailView}>
      <ReviewInquiryHeader type={type} />
      {type === 'review' ? (
        <Review></Review>
      ) : type === 'inquiry' ? (
        <Inquiry></Inquiry>
      ) : null}
    </div>
  );
}
/* --------------------------------- Example -------------------------------- */
// <ProductDetailView type={'review'}></ProductDetailView>
// <ProductDetailView type={'inquiry'}></ProductDetailView>
