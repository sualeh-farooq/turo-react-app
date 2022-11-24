import Card from "react-bootstrap/Card";
import "../../App.css";
import out1 from "../../assets/out1.jpg";
import Button from "react-bootstrap/Button";

export function Outcard({ outImg, outhead, outhead2, outdesc, outdesc2 }) {
  return (
    <>
      <Card className="outCard">
        <div className="outcard-pic-space">
          <img className="outcard-pic" src={outImg} alt="Image" />
        </div>
        <div className="outcard-det">
          <h2>
            {outhead}
            <span>
              {" "}
              to <br /> {outhead2}
            </span>
          </h2>
          <p>
            {outdesc} <br /> {outdesc2}{" "}
          </p>
          <Button className="brows-car">Browse a Car</Button>{" "}
        </div>
      </Card>
    </>
  );
}
