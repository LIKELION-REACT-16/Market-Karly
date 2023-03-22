import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

// import "./styles.css";
import classes from '@/components/Slider/Slider.module.scss'

// import required modules
import { Navigation } from "swiper";


// 이미지 파일 가져오기
import img1 from "@/assets/img-banner01.svg"
import img2 from "@/assets/img-banner02.svg"
import img3 from "@/assets/img-banner03.svg"
import img4 from "@/assets/img-banner04.svg"




/* ----------------------------- Slider 컴포넌트 시작 ----------------------------- */

export function Slider() {

  const prevButton = useRef(null);
  const nextButton = useRef(null);
  
  
  // const style = {backgroundColor: "red"}
  return (
    <>
      
      <Swiper
        // navigation={true}
        navigation={{
          prevEl : prevButton.current,
          nextEl : nextButton.current,
        }}
        modules={[ Navigation]}
        loop={true} 
        
        onBeforeInit={(swiper) => {
          // 초기 설정
          swiper.params.navigation.prevEl = prevButton.current;
          swiper.params.navigation.nextEl = nextButton.current;
          swiper.navigation.update();
        }}
        className={classes.mySwiper}
        // className={classes}
      >
        <button
        ref={prevButton}
        className={classes.swiperPrevBtn}   
      />
        <SwiperSlide><img className={classes.Sliderimage} src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img className={classes.Sliderimage} src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img className={classes.Sliderimage} src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className={classes.Sliderimage} src={img1} alt="" /></SwiperSlide>

        <button
        ref={nextButton}
        className={classes.swiperNextBtn}
      />

      </Swiper>
      
    </>
  );
}

