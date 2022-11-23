import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Noti } from "./App";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logo.png";
import CollapsibleExample from "./App";
import { UncontrolledExample ,
  DisplayCards
} from "./App";
import Jeep from "./assets/jeep.jpg";
import tesla from './assets/tesla.jpg'
import subaru from './assets/subaro.jpg'
import porsche from './assets/porsche.jpg'
import BMW from './assets/BMW.jpg'



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <div className="noti">
        <p> <a href="https://turo.com/us/en/search?country=US&defaultZoomLevel=11&delivery=false&endDate=11%2F28%2F2022&endTime=10%3A00&isMapSearch=false&itemsPerPage=200&latitude=40.7127753&location=New%20York%2C%20NY%2C%20USA&locationType=CITY&longitude=-74.0059728&pickupType=ALL&region=NY&sortType=RELEVANCE&startDate=11%2F25%2F2022&startTime=10%3A00&useDefaultMaximumDistance=true">Turo has launched in New York! Tap to explore cars.</a> </p>
      </div>
      <CollapsibleExample />
      <UncontrolledExample />
      <div className="container">
        <div className="row">
          <div className="after-ban">
           <span><h1>Find your drive</h1></span>
           <span> <h2> Explore the world's largest car sharing marketplace </h2></span>
          <hr className="pink"/>
          </div>
        </div>
      </div>  

      <div className="container" >
        <div className="row" >
          <div className="cards">
            <div className="brows"> Browse by Make</div>
            <div className="cardsgrid" >
              <DisplayCards img={Jeep} title="Jeep" />
              <DisplayCards img={tesla} title="Tesla" />
              <DisplayCards  img={subaru} title="Subaru" />
              <DisplayCards img={porsche} title="Porsche" />
              <DisplayCards img={BMW} title="BMW"  />
            </div>
          </div>
        </div>
      </div>
    </>
  </React.StrictMode>
);
