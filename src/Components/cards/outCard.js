import Card from 'react-bootstrap/Card';
import "../../App.css";
import out1 from "../../assets/out1.jpg"
import Button from 'react-bootstrap/Button';


export function Outcard() {
  return (
    <>
      <Card className='outCard' >
      <div className='outcard-pic-space'>
        <img className='outcard-pic' src={out1} alt="" />
      </div>
      <div className='outcard-det' >
        <h2>Find the perfect car <span> to <br />   conquer the great outdoors </span></h2>
        <p>Go prepared in a rugged 4x4 to take on winter roads with <br /> ease, or a camper van to take you to the trees.</p>
        <Button className='brows-car' >Browse a Car</Button>{' '}
      </div>
      </Card>
    </>
  );
}

