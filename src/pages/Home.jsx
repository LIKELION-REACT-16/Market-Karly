import RouteLink from '@/components/RouteLink';
import banner03 from '@/assets/img-banner03.svg';
import { Banner } from '@/components/Banner/Banner';
// import Footer from '@/components/Footer/Footer';
import { MainModal } from '@/components/MainModal/MainModal';

import { ItemCarousel } from '@/components/ItemCarousel/ItemCarousel';

import { Slider } from '@/components/Slider/Slider';
import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => {
  return (
    <>
      <Slider />
      <MainModal />
      <ItemCarousel title="이 상품 어때요?" />
      <Banner
        imgSrc={banner03}
        children="더 풍성해진 10월의 퍼플위크 적립률 UP+3종 쿠폰팩
            KURLY PURPLE WEEK"
      />

      <ItemCarousel title="놓치면 후회할 가격" />
    </>
  );
};

export default Home;
