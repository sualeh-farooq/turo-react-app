import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App.css";
import { Pagination, Navigation } from "swiper";
import booked from "../../assets/becomehost.jpg";

import "../../App.css";



export function Book() {
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="cardsgrid2">

         
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>  <img className="bookImg" src={booked} alt=""/> </SwiperSlide>
      </Swiper>
      </div>
          </div>
          </div>
    </>
  );
}
