import productImg from '@/assets/img-zzol-vertical.png';
import classes from '@/components/ProductCard/productCard.module.scss';
import ProductMainInfo from './ProductMainInfo';
import ProductDetailInfoList from '@/components/ProductCard/ProductDetailInfo';

const productInfo = {
  productName: '[풀무원] 탱탱쫄면(4개입)',
  description: '튀기지 않아 부담 없는 매콤함',
  price: 4980,
};

export default function ProductCard() {
  return (
    <section className={classes.productCard}>
      <figure className={classes.productImgContainer}>
        <img src={productImg} alt="탱탱 쫄면 제품 사진" />
        <figcaption className={classes.a11yHidden}>
          탱탱 쫄면 제품 사진
        </figcaption>
      </figure>
      <div>
        <ProductMainInfo
          productName={productInfo.productName}
          description={productInfo.description}
          price={productInfo.price}
        />
        <ProductDetailInfoList />
      </div>
    </section>
  );
}
