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
        <p>Turo has launched in New York! Tap to explore cars.</p>
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
