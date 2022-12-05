
import Carousel from "react-bootstrap/Carousel";
import "../../App.css";
import Banner from "../../assets/banner.jpg"
import { SearchBar } from "../home/searchbar";
import profileBanner from '../../assets/Inkedprofilebanner.jpg'

export function UncontrolledExample() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 banner" src={Banner} alt="First slide" />

          <SearchBar />
        </Carousel.Item>
      </Carousel>
    );
  }
   

  
export function ProfileBanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 banner" src={profileBanner} alt="First slide" />
        <SearchBar />
      </Carousel.Item>
    </Carousel>
  );
}
 