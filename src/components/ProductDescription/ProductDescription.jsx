import classNames from 'classnames';
import productImg from '@/assets/img-zzol.png';
import checkPointImg from '@/assets/img-check-point.png';
import { srOnly } from '@/styles/components/A11yHidden.module.scss';
import classes from '@/components/ProductDescription/productDescription.module.scss';
import { forwardRef } from 'react';

export const ProductDescription = forwardRef(
  ({ className, id, ...rest }, ref) => {
    return (
      <section
        id={id}
        className={classNames(className, classes.productDescription)}
        ref={ref}
      >
        <h3 className={srOnly}>상품 설명</h3>
        <article className={classes.descriptionArticle}>
          <figure>
            <img src={productImg} alt="풀무원 탱탱쫄면 제품 정면 사진" />
            <figcaption>
              <h4 className={srOnly}>
                튀기지 않아 부담 없는 매콤함 풀무원 탱탱쫄면
              </h4>
              <p className={classes.subTitle}>튀기지 않아 부담 없는 매콤함</p>
              <p className={classes.title}>[풀무원] 탱탱쫄면</p>
            </figcaption>
          </figure>
          <p className={classes.detailDescription}>
            쫄면의 진가는 매콤새콤한 양념과 탱탱한 면발에서 찾을 수 있지요.
            풀무원은 이 맛을 더 부담 없이 즐길 수 있도록 튀기지 않고 만든
            탱탱쫄면을 선보입니다. 밀가루와 감자 전분을 적절히 배합해 탄력이
            좋고, 입에 넣었을 때는 찰지게 씹히죠. 고추장을 넣어 숙성한 비빔장은
            자연스럽고 깊은 맛을 냅니다. 간단하게 조리해 마지막 한 가닥까지
            탱탱한 식감을 즐겨보세요. 취향에 따라 다양한 고명을 올려 드셔도
            좋아요.
          </p>
        </article>

        <article className={classes.checkPoint}>
          <h4 className={classes.checkPointTitle}>Karly's Check Point</h4>
          <img
            src={checkPointImg}
            alt="생산 유통과정 튀기지 않은 건면, 활용법 4개입 포장, 간편 조리 쫄면, 브랜드와 생산자 바른먹거리 전문기업, 풀무원"
          />
        </article>
      </section>
    );
  }
);

export default ProductDescription;
