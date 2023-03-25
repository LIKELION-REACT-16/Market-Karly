import React from 'react';
import zzol from '@/assets/product_zzol.png';
import styles from '@/components/ItemCarousel/Item.module.scss';

export const MainItem = ({ productName, price, productDesc }) => {
  return (
    <div className={styles.thumbnailWrapper}>
      <img src={zzol} width="250" />
      <p className={styles.starDelivery}>샛별배송</p>
      <h4>[풀무원] 탱탱쫄면 (4개입)</h4>
      <span>4,800원</span>
    </div>
  );
};
