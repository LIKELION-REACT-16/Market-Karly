import RouteLink from '@/components/RouteLink';
import { useState } from 'react';

// styles
import styles from '@/styles/productList.module.scss';

// components
import { Thumbnail, TotalNFilter, Accordian } from '@/components';

const ProductList = () => {
  const [totalNum, setTotalNum] = useState(0);

  return (
    <div className={styles.listWrapper}>
      <h2>베스트</h2>
      <div style={{ display: 'flex' }}>
        <section>
          <Accordian />
        </section>
        <main style={{ maxWidth: '783px' }}>
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
    </div>
  );
};

export default ProductList;
