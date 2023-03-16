import React from 'react';
import zzol from '@/assets/zzol.png';
import Badge from './Badge';
import styles from '@/styles/thumbnail.module.scss';

export const Thumbnail = ({ productName, price, productDesc }) => {
  const badgeInfo = {
    karlyOnly: {
      name: 'Karly Only',
      color: '#5F0080',
    },
    limited: {
      name: '한정수량',
      color: '#2b2b2b',
    },
  };

  return (
    <div className={styles.thumbnailWrapper}>
      <img src={zzol} width="250" />
      <p className={styles.starDelivery}>샛별배송</p>
      <h4>[풀무원] 탱탱쫄면 (4개입)</h4>
      <span>4,800원</span>
      <p>튀기지 않아 부담없는 매콤함</p>
      <div className={styles.badgeWrapper}>
        <Badge
          badgeName={badgeInfo.karlyOnly.name}
          nameColor={badgeInfo.karlyOnly.color}
        />
        <Badge
          badgeName={badgeInfo.limited.name}
          nameColor={badgeInfo.limited.color}
        />
      </div>
    </div>
  );
};
