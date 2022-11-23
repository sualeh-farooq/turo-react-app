
import Carousel from "react-bootstrap/Carousel";
import "../../App.css";
import Banner from "../../assets/banner.jpg"

export function UncontrolledExample() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 banner" src={Banner} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    );
  }
  