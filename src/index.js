import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CollapsibleExample } from "./Components/navbar/navbar";
import { DisplayCards } from "./Components/cards/carcards";
import { UncontrolledExample } from "./Components/banner/banner";
import { Noti } from "./Components/navbar/noti";
import { Drive } from "./Components/home/drive";
import { Slides } from "./Components/sliders/carSlider";
import { Outcard } from "./Components/cards/outCard";
import { Outslide } from "./Components/sliders/outdoor";
import { CitySlides } from "./Components/sliders/cityslides";
import { Dreams } from "./Components/home/fuel";
import { Travel } from "./Components/sliders/travel";
import { Meet } from "./Components/home/meet";
import { Hostcard } from "./Components/cards/hostCard";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { HostSlide } from "./Components/sliders/host";
import { Book } from "./Components/sliders/book";
import { FAQ } from "./Components/home/faq";
import { Accord, Accordion } from "./Components/FAQ/faq";
import { FaqSlide } from "./Components/sliders/questions";
import { HelloBody } from "./Components/footer/footerdet";
import { Footer } from "./Components/footer/footer";
import { SearchBar } from "./Components/home/searchbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Noti />
      <CollapsibleExample />
      <UncontrolledExample />
      <Drive />
      <Slides />
      <br />
      <br />
      <Outslide />
      <br />
      <br />
      <br />
      <br />
      <CitySlides />
      <br />
      <Dreams />
      <br />
      <Travel />
      <br />
  <Meet />
  <br />

  <br />
  <br />
  <br />
  <HostSlide />
  <br />
  <br />
  <br />
  <Book />
  <br />
  <br />
  <FAQ />
  <br />
  <br />
  <br />
  <FaqSlide />
  <br />
  <br />
  <HelloBody />
  <Footer />
    </>
  </React.StrictMode>
);
