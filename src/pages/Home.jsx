import RouteLink from '@/components/RouteLink';

import { Routes, Route } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
// import Footer from '@/components/Footer/Footer';
import { Slider } from '@/components/Slider/Slider';
import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => {
  return (
    <>
      <Slider />
      <Banner
        imgSrc={banner03}
        children="더 풍성해진 10월의 퍼플위크 적립률 UP+3종 쿠폰팩
      KURLY PURPLE WEEK"
      />
    </>
  );
};

export default Home;
