import "../../App.css";
import Button from "react-bootstrap/Button";

export function Dreams() {
    return  ( <>
    <div className="container">
        <div className="row">
          <div className="after-city">
            <span>
              <h1>Fuel your daydreams</h1>
            </span>
            <span>
              {" "}
              <p style={{textAlign: "center"}}> Stoke your wanderlust with some dreamy photo <br />  chronicles of road trip adventures.</p>
            </span>
            <hr className="pink2" />
          </div>
            <Button className="travelBtn" >Explore Travelogues</Button>
        </div>
      </div>
      </> )
}