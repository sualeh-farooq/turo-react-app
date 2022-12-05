import "../../App.css"
import { Card } from "react-bootstrap";
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {VscPass} from 'react-icons/vsc'
import profileImg from "../../assets/profile.jpg"
import ReactStars from "react-stars";
import { auth } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    console.log(user.email);
    document.getElementById('cus-name').innerText = user.email
  } else {
    console.log("Not Available");
    document.getElementById('cus-name').innerText = 'User Not Login'

  }
})

export function Data() {

  const date = new Date().toDateString()
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="profile-bg">
            <div className="profile-data">
              <h1 id="cus-name"></h1>
              <br />
              <Card className="revCard" style={{ width: "30rem" , border:'none' , outline:'none' }}>
            <Card.Img variant="top"  />
            <Card.Body className="profile-body" >
            <div className="data-small">
            <p>Approved to Drive <AiOutlineQuestionCircle /></p>
              <p style={{color:'#593cfb'}}><b>Verify ID</b></p>
            </div>
            <div className="data-small">
              <p>Email Address</p>
              <p style={{color:'#593cfb' , fontSize:'x-large'}}><b ><VscPass/></b></p>
            </div>
            <div className="data-small">
            <p>Phone Number</p>
            <p style={{color:'#593cfb'}}><b >Verify Phone Number</b></p>
            </div>
            <div className="data-small">
            <p>Facebook</p>
            <p style={{color:'#593cfb'}}><b >Connect Facebook Account</b></p>
            </div>
            <div className="data-small">
            <p style={{color:'gray'}}> <small>Build trust with other users on Turo by verifying your contact information. </small></p>
            </div>
            </Card.Body>
          </Card>
            </div>
            <div className="profile-review">
            <p style={{color:'gray'}}>  <b>REVIEWS FROM HOST</b> </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
