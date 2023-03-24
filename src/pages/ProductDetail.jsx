import ProductCard from '@/components/ProductCard/ProductCard';
import ProductNav from '@/components/ProductNav/ProductNav';
import ProductDescription from '@/components/ProductDescription/ProductDescription';
import ProductDetailDescription from '@/components/ProductDetailDescription/ProductDetailDescription';
import ProductDetailView from '@/components/ProductDetailView/ProductDetailView';
import { useRef, useState, useEffect } from 'react';

const ProductDetail = () => {
  const [activeAnchor, setActive] = useState(1);

  const description = useRef();
  const detailInformation = useRef();
  const review = useRef();
  const inquiry = useRef();

  const refList = [description, detailInformation, review, inquiry];

  const onIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target) {
          case description.current:
            setActive(1);
            break;
          case detailInformation.current:
            setActive(2);
            break;
          case review.current:
            setActive(3);
            break;
          case inquiry.current:
            setActive(4);
            break;
        }
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: '-10% 0px',
      threshold: 0.2,
    });

    refList.map((item) => {
      observer.observe(item.current);
    });

    return () => {
      refList.map((item) => {
        observer.observe(item.current);
      });
    };
  }, []);

  return (
    <div>
      <ProductCard />
      <ProductNav activeAnchor={activeAnchor} />
      <ProductDescription ref={description} id="description" />
      <ProductDetailDescription
        ref={detailInformation}
        id="detailInformation"
      />
      <ProductDetailView type={'review'} ref={review} id="review" />
      <ProductDetailView type={'inquiry'} ref={inquiry} id="inquiry" />
    </div>
  );
};

export default ProductDetail;
