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
import { HostSlide } from "./Components/sliders/host";
import { Book } from "./Components/sliders/book";
import { FAQ } from "./Components/home/faq";
import { FaqSlide } from "./Components/sliders/questions";
import { HelloBody } from "./Components/footer/footerdet";
import { Footer } from "./Components/footer/footer";
import { SearchBar } from "./Components/home/searchbar";
import { LoginModal } from "./Components/home/modal";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Profile } from "./Components/Pages/profile";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/" element={<HomeView />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export function HomeView() {
  return (
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
      <LoginModal />
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
  );
}
