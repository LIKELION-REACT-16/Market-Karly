import Test from '@/components/test';
import RouteLink from '@/components/RouteLink';

import { Routes, Route } from 'react-router-dom';
import Footer from '@/components/Footer/Footer';
import { ProductDetailView } from '@/components/ProductDetailView/ProductDetailView';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <ProductDetailView type={'review'} id={'review'}></ProductDetailView>
      <ProductDetailView type={'inquiry'} id={'inquiry'}></ProductDetailView>
    </div>
  );
};

export default Home;
