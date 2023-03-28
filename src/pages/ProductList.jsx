import RouteLink from '@/components/RouteLink';
import { useState, useEffect } from 'react';

// styles
import styles from '@/styles/productList.module.scss';

// components
import { Thumbnail, TotalNFilter, Accordion } from '@/components';

// fb
import { dbService } from '@/routes/fbase';
import { getDocs, collection } from 'firebase/firestore';

const ProductList = () => {
  const [totalNum, setTotalNum] = useState(0);
  const [productsList, setProductsList] = useState([]);

  const productCollection = collection(dbService, 'products');

  useEffect(() => {
    const getProductsList = async () => {
      try {
        const data = await getDocs(productCollection);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setProductsList(filteredData);
        setTotalNum(productsList.length);
      } catch (err) {
        console.log(err);
      }
    };

    getProductsList();
  }, []);

  return (
    <div className={styles.listWrapper}>
      <h2 style={{ fontSize: '22px', fontWeight: 600 }}>베스트</h2>

      <div
        style={{
          display: 'flex',
          marginTop: '5%',
          justifyContent: 'space-between',
        }}
      >
        <section>
          <Accordion />
        </section>
        <article style={{ maxWidth: '783px' }}>
          <TotalNFilter totalNum={totalNum} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              height: 'auto',
            }}
          >
            {productsList.map((product) => (
              <Thumbnail
                key={product.id}
                productId={product.id}
                productName={product.productName}
                salePrice={product.salePrice}
                saleRatio={product.saleRatio}
                price={product.price}
                productDesc={product.desc}
                thumbnail={product.image.thumbnail}
                imgAlt={product.image.alt}
              />
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductList;
