import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Noti } from "./App";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logo.png";
import CollapsibleExample from "./App";
import { UncontrolledExample } from "./App";

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
    </>
  </React.StrictMode>
);
