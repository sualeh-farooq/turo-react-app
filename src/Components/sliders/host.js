import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "../../App.css";
import kevin from "../../assets/kevin.jpg";
import mohammad from "../../assets/muhammad.jpg";
import derrick from "../../assets/derrick.jpg";

import { Hostcard } from "../cards/hostCard";

export function HostSlide() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="cardsgrid3">
            <Hostcard
              pic={kevin}
              name="Kevin M"
              trips="490 Trips - Joined Aug 2020"
              review=" 
              He came thru for us at the last minute (I was literally on the plane when I got a call that my car from a rental agency was ......
              "
              customer="Donna S - Nov 2020"
            />
            <Hostcard
              pic={mohammad}
              name="Mohammed A."
              trips="1,084 trips - Joined Apr 2015"
              review="
              Mohammed has a great vehicles, cars are very clean, and he is always punctual, no matter the time of day or night.
              "
              customer="Randall C - Oct 2022"
            />
            <Hostcard
              pic={derrick}
              name="Derrick H"
              trips="1,130 trips - Joined Sep 2017"
              review="Thanks for being responsive and having such great cars to borrow again. Best experience so far"
              customer="Matteo B. - Nov 2022"
            />
          </div>
        </div>
      </div>
    </>
  );
}
