import { Card } from "react-bootstrap";


export function DisplayCards({img , title}) {
    return (
      <>
          <Card className="carsCard" style={{ width: "13rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body className="card-body" >
              <Card.Title className="cartitle" >{title}</Card.Title>
            </Card.Body>
          </Card>
      </>
    );
  }     