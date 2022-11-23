import "../../App.css";
import Jeep from "../../assets/jeep.jpg";
import tesla from "../../assets/tesla.jpg";
import subaru from "../../assets/subaro.jpg";
import porsche from "../../assets/porsche.jpg";
import BMW from "../../assets/BMW.jpg";
import { DisplayCards } from "../cards/carcards";


export function Drive() {
    return  ( <>
    <div className="container">
        <div className="row">
          <div className="after-ban">
            <span>
              <h1>Find your drive</h1>
            </span>
            <span>
              {" "}
              <h2> Explore the world's largest car sharing marketplace </h2>
            </span>
            <hr className="pink" />
          </div>
        </div>
      </div>
    {/* <div className="container">
        <div className="row">
          <div className="cards">
            <div className="cardsgrid">
              <DisplayCards img={Jeep} title="Jeep" />
              <DisplayCards img={tesla} title="Tesla" />
              <DisplayCards img={subaru} title="Subaru" />
              <DisplayCards img={porsche} title="Porsche" />
              <DisplayCards img={BMW} title="BMW" />
            </div>
          </div>
        </div>
      </div> */}
      </> )
}