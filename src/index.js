import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CollapsibleExample } from "./Components/navbar/navbar";
import { DisplayCards } from "./Components/cards/cards";
import { UncontrolledExample } from "./Components/banner/banner";
import { Noti } from "./Components/navbar/noti";
import { Drive } from "./Components/home/drive";
import { Slides } from "./Components/sliders/slider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Noti />
      <CollapsibleExample />
      <UncontrolledExample />
      <Drive />      
      <Slides />
      
    </>
  </React.StrictMode>
);
