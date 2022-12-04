import "../../App.css";
import { DisplayCards } from "../cards/carcards";
import BMW from "../../assets/BMW.jpg";
import Jeep from "../../assets/jeep.jpg";
import Porsche from "../../assets/porsche.jpg"
import Subaru from "../../assets/subaro.jpg"
import Tesla from "../../assets/tesla.jpg"
import Mercedes from "../../assets/mercedez.jpg"
import Toyota from "../../assets/toyota.jpg"
import Nissan from "../../assets/nissan.jpg"
import Lamborgini from "../../assets/lamborghini.jpg"
import ford from "../../assets/ford.jpg"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Pagination , Navigation , FreeMode} from "swiper";

export function Slides() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="cards">
            <div className="cardsgrid">
            <Swiper
        slidesPerView={5}
        spaceBetween={1}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView : 2,
            spaceBetween : 2,
          },
          375: {
            slidesPerView : 2,
            spaceBetween : 2,
          },
          425: {
            slidesPerView : 2,
            spaceBetween : 1,
          },
          768: {
            slidesPerView : 5,
            spaceBetween : 2,
          }
        }}
     

      >
                   <SwiperSlide>
                  {" "}
                  <DisplayCards img={Jeep} title="Jeep" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <DisplayCards img={Tesla} title="Tesla" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <DisplayCards img={Subaru} title="Subaru" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <DisplayCards img={Porsche} title="Porsche" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <DisplayCards img={BMW} title="BMW" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <DisplayCards img={Mercedes} title="Mercedes" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <DisplayCards img={Toyota} title="Toyota" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <DisplayCards img={Nissan} title="Nissan" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <DisplayCards img={Lamborgini} title="Lamborghini" />{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <DisplayCards img={ford} title="Ford" />{" "}
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
