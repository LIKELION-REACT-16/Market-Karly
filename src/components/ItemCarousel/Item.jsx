import React from 'react';
import zzol from '@/assets/zzol.png';
import styles from '@/components/ItemCarousel/Item.module.scss';

// img
import cart from '@/assets/button-cart.svg';

export const MainItem = ({ productName, price, productDesc }) => {
  return (
    <div className={styles.thumbnailWrapper}>
      <div className={styles.thumbnailVisual}>
        <img className={styles.thumbnailImg} alt="상품명" src={zzol} />
        <button className={styles.cartButton} type="button">
          <img src={cart} />
        </button>
      </div>
      <p className={styles.starDelivery}>샛별배송</p>
      <h4>[풀무원] 탱탱쫄면 (4개입)</h4>
      <span>4,800원</span>
    </div>
  );
};
