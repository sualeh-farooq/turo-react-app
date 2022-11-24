import { Card } from "react-bootstrap";


export function DisplayCityCard({img , title , onClick }) {

    return (
      <>
          <Card className="cityCard" style={{ width: "10rem" }}>
            <Card.Img className="cityImage" variant="top" src={img} />
            <Card.Body>
              <Card.Title className="citytitle" >{title}</Card.Title>
            </Card.Body>
          </Card>
        
      </>
    );
  }