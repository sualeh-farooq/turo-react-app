import "../../App.css";
// import Jeep from "../../assets/jeep.jpg";
// import Subaru from "../../assets/subaro.jpg";
import losAng from "../../assets/losangeles.png"
import losAngOver from "../../assets/losangelesover.png"
import miami from "../../assets/miami.png"
import miamOver from "../../assets/miamiover.png"
import honolulu from "../../assets/honululu.png"
import honoluluPver from "../../assets/honululuover.png"
import den from "../../assets/denver.png"
import denOver from "../../assets/denverover.png"
import london from "../../assets/london.png"
import londonOver from "../../assets/londonover.png"
import toronto from "../../assets/toronto.png"
import torontoOver from "../../assets/torontoover.png"

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { DisplayCityCard } from "../cards/citycard";

export function CitySlides() {

  const handleOver1 = (event) => {
    event.target.src = losAngOver;
  };

  const handleOut1 = (event) => {
    event.target.src = losAng;
  };
  const handleOver2 = (event) => {
    event.target.src = miamOver;
  };

  const handleOut2 = (event) => {
    event.target.src = miami;
  };
  const handleOver3 = (event) => {
    event.target.src = honoluluPver;
  };

  const handleOut3= (event) => {
    event.target.src = honolulu;
  };
  const handleOver4 = (event) => {
      event.target.src = denOver;
    };
    
    const handleOut4= (event) => {
      event.target.src = den;
  };
  const handleOver5 = (event) => {
    event.target.src = londonOver;
  };

  const handleOut5= (event) => {
    event.target.src = london;
  };
  const handleOver6 = (event) => {
    event.target.src = torontoOver;
  };

  const handleOut6= (event) => {
    event.target.src = toronto;
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="cards">
            <div className="brows">Browse by destination</div>
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
            slidesPerView : 3,
            spaceBetween : 2,
          },
          375: {
            slidesPerView : 3,
            spaceBetween : 2,
          },
          425: {
            slidesPerView : 4,
            spaceBetween : 1,
          },
          768: {
            slidesPerView : 5,
            spaceBetween : 2,
          }
        }}
     

      >
                <SwiperSlide
                  onMouseOver={(event) => handleOver1(event)}
                  onMouseOut={(event) => handleOut1(event)}
                >
                  {" "}
                  <DisplayCityCard img={losAng} title="Los Angeles" />{" "}
                </SwiperSlide>
                <SwiperSlide
                  onMouseOver={(event) => handleOver2(event)}
                  onMouseOut={(event) => handleOut2(event)}
                >
                  {" "}
                  <DisplayCityCard img={miami} title="Miami" />{" "}
                </SwiperSlide>
                <SwiperSlide
                  onMouseOver={(event) => handleOver3(event)}
                  onMouseOut={(event) => handleOut3(event)}
                >
                  {" "}
                  <DisplayCityCard img={honolulu} title="Honolulu" />{" "}
                </SwiperSlide>
                <SwiperSlide
                  onMouseOver={(event) => handleOver4(event)}
                  onMouseOut={(event) => handleOut4(event)}
                >
                  {" "}
                  <DisplayCityCard img={den} title="Denver" />{" "}
                </SwiperSlide>
                <SwiperSlide
                  onMouseOver={(event) => handleOver5(event)}
                  onMouseOut={(event) => handleOut5(event)}
                >
                  {" "}
                  <DisplayCityCard img={london} title="London" />{" "}
                </SwiperSlide>
                <SwiperSlide
                  onMouseOver={(event) => handleOver6(event)}
                  onMouseOut={(event) => handleOut6(event)}
                >
                  {" "}
                  <DisplayCityCard img={toronto} title="Toronto" />{" "}
                </SwiperSlide>
                
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
