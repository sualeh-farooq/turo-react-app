import { Card } from "react-bootstrap";
import "../../App.css";
import ReactStars from "react-stars";
import { FaAward } from "react-icons/fa";

export function Hostcard({ pic, name, trips, review, customer }) {
  return (
    <>
      <Card className="hostCard" style={{ width: "18rem" }}>
        <div className="host-top">
          <div className="driver">
            <img className="driver-pic" src={pic} />
          </div>
          <div className="driver-name">
            <b style={{ fontSize: "large" }}>{name}</b>
            <br />
            <p style={{ fontSize: "medium" }}>
              <FaAward /> All Star Host
            </p>
            <p>{trips}</p>
          </div>
        </div>
        <div className="host-bottom">
          <ReactStars className="stars" count={5} size={24} color2={"yellow"} />
          <br />
          <p>{review}</p>
          <b style={{ fontSize: "small" }}>
            {" "}
            <small>{customer}</small>
          </b>
        </div>
      </Card>
    </>
  );
}
