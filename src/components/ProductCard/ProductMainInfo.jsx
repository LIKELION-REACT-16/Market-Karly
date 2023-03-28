import classes from '@/components/ProductCard/productMainInfo.module.scss';

export default function ProductMainInfo({
  productName,
  description,
  price,
  dawnShipping = true,
  ...rest
}) {
  return (
    <div className={classes.mainInfo}>
      <span style={{ display: dawnShipping ? 'block' : 'none' }}>
        샛별 배송
      </span>
      <h2 className={classes.productName}>{productName}</h2>
      <p className={classes.description}>{description}</p>
      <div className={classes.price}>
        <span>{price}</span>
        <span>원</span>
      </div>
      <p>로그인 후, 적립 혜택이 제공됩니다.</p>
    </div>
  );
}
