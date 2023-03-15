import Test from '@/components/test';
import RouteLink from '@/components/RouteLink';

import { Routes, Route } from 'react-router-dom';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <RouteLink />
      <Footer />
    </div>
  );
};

export default Home;
