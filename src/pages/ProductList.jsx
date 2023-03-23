import RouteLink from '@/components/RouteLink';
import { useState } from 'react';

// styles
import styles from '@/styles/productList.module.scss';

// components
import { Thumbnail, TotalNFilter } from '@/components';

const ProductList = () => {
  const [totalNum, setTotalNum] = useState(0);

  return (
    <div className={styles.listWrapper}>
      <h2>베스트</h2>

      <main>
        <TotalNFilter totalNum={totalNum} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
      </main>
    </div>
  );
};

export default ProductList;
