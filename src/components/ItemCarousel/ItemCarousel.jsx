import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

// import "./styles.css";
import classes from './ItemCarousel.module.scss';

// import required modules
import { Navigation } from 'swiper';
import { MainItem } from '@/components/ItemCarousel/Item';

// import { MainItem } from './item';

/* ----------------------------- ItemCarousel 시작 ---------------------------- */
export function ItemCarousel() {
  const prevButton = useRef(null);
  const nextButton = useRef(null);

  return (
    <>
      <Swiper
        // navigation={true}
        navigation={{
          prevEl: prevButton.current,
          nextEl: nextButton.current,
        }}
        modules={[Navigation]}
        loop={true}
        onBeforeInit={(swiper) => {
          // 초기 설정
          swiper.params.navigation.prevEl = prevButton.current;
          swiper.params.navigation.nextEl = nextButton.current;
          swiper.navigation.update();
        }}
        className={classes.mySwiper}
      >
        <button ref={prevButton} className={classes.swiperPrevBtn} />
        <SwiperSlide>
          <div className={classes.itemlist}>
            <MainItem />
            <MainItem />
            <MainItem />
            <MainItem />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.itemlist}>
            <MainItem />
            <MainItem />
            <MainItem />
            <MainItem />
          </div>
        </SwiperSlide>

        <button ref={nextButton} className={classes.swiperNextBtn} />
      </Swiper>
    </>
  );
}
