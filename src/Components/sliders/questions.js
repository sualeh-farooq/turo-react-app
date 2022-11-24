import { Accord } from "../FAQ/faq";
import "../../App.css";

export function FaqSlide() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="cardsgrid4">
            <div className="left-faq">
                <Accord />
                <Accord />
                <Accord />
                <Accord />

            </div>
            <div className="right-faq">
            <Accord />
            <Accord />
            <Accord />
            <Accord />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
