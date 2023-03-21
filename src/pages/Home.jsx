import RouteLink from '@/components/RouteLink';

import { Routes, Route } from 'react-router-dom';
// import Footer from '@/components/Footer/Footer';
import { Slider } from '@/components/Slider/Slider';
import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => {
  return (
    <div style={{ height: '100.3vh' }}>
      <h2>Home</h2>
      <Slider />
    </div>
  );
};

export default Home;
