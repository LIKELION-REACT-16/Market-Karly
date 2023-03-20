import classes from '@/components/ProductDetailView/ProductDetailView.module.scss';
import { NormalButton } from '../Button';
import { ReviewInquiryHeaderFrame } from './ReviewInquiryHeaderFrame';

export function ReviewInquiryHeader({ type }) {
  return (
    <div className={classes.ReviewInquiryHeader}>
      <ReviewInquiryHeaderFrame type={type} />
      <NormalButton width="155" height="44">
        <span>후기 작성하기</span>
      </NormalButton>
    </div>
  );
}
