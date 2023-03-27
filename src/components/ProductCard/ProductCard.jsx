import classes from '@/components/ProductCard/productCard.module.scss';
import ProductMainInfo from './ProductMainInfo';
import ProductDetailInfo from '@/components/ProductCard/ProductDetailInfo';
import a11y from '@/styles/components/A11yHidden.module.scss';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useLayoutEffect } from 'react';
import {
  productID,
  productTitleState,
  productDescriptionState,
  productPrice,
  productImgObject,
} from '@/@store/detailCardState';

import { recoilProductInfoSelector } from '@/@store/detailPageProductInfo';
import { useParams } from 'react-router-dom';

export default function ProductCard() {
  const params = useParams();
  const contents = useRecoilValue(recoilProductInfoSelector(params.id));

  if (!contents) {
    alert('올바르지 않은 주소입니다.');
    window.location.replace('/');
  }

  const setProductID = useSetRecoilState(productID);
  const [title, setTitle] = useRecoilState(productTitleState);
  const [description, setDescription] = useRecoilState(productDescriptionState);
  const [price, setPrice] = useRecoilState(productPrice);
  const [thumbnailImg, setThumbnailImg] = useRecoilState(productImgObject);

  useLayoutEffect(() => {
    console.log(contents);
    setProductID(params.id);
    setTitle(contents.productName);
    setDescription(contents.desc);
    setPrice(contents.price);
    setThumbnailImg(contents.image);
  }, []);

  return (
    <section className={classes.productCard}>
      <figure className={classes.productImgContainer}>
        <img src={thumbnailImg.thumbnail} alt={thumbnailImg.alt} />
        <figcaption className={a11y.srOnly}>탱탱 쫄면 제품 사진</figcaption>
      </figure>
      <div>
        <ProductMainInfo
          productName={title}
          description={description}
          price={price.toLocaleString('ko-KR')}
        />
        <ProductDetailInfo />
      </div>
    </section>
  );
}
