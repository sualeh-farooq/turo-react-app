import "../../App.css";
import out1 from "../../assets/out1.jpg";
import out2 from "../../assets/out2.jpg";
import out3 from "../../assets/out3.jpg";
import out4 from "../../assets/out4.jpg";
import out5 from "../../assets/out5.jpg";
import out6 from "../../assets/out6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Outcard } from "../cards/outCard";


export function Outslide() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="cardsgrid2">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <Outcard outImg={out1} outhead={`Find the perfect car`} outhead2="conquer great outdoors."
                outdesc={`Go prepared in a rugged 4x4 to take on winter roads `} outdesc2='with ease, or a camper van to take you to the trees.'
                />{" "} 
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Outcard outImg={out2} outhead={`Find the perfect car`} outhead2="to unwind for the weekend."
                outdesc={`From daily drivers to spirited sports cars, ditch the`} outdesc2='grind with convenient nearby cars'
                />{" "} 
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Outcard outImg={out3} outhead={`Find the perfect car`} outhead2="to upgrade your vacation plans."
                outdesc={`Skip the rental car counter and find the perfect car`} outdesc2='to complement your vacation vibe.'
                />{" "} 
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Outcard outImg={out4} outhead={`Find the perfect car`} outhead2="for scenic corners & curves."
                outdesc={`Get your fill of high-performance thrills, with the richest selection`} outdesc2='of luxury and exotic vehicles anywhere.'
                />{" "} 
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Outcard outImg={out5} outhead={`Find the perfect car`} outhead2="to try before you buy."
                outdesc={`Make sure your future wheels work well with your`} outdesc2='lifestyle by taking your time in the driver’s seat.'
                />{" "} 
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Outcard outImg={out6} outhead={`Find the perfect car`} outhead2="to make errand day easier"
                outdesc={`Book a roomy truck or SUV to ease your errand day`} outdesc2='stress, or to motivate your moving day.'
                />{" "} 
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
