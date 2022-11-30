import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Apple from "../../assets/apple.svg"
import Google from "../../assets/google.png"
import Facebook from "../../assets/facebook.png"
import {BsApple} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import {SiFacebook} from 'react-icons/si'


export function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Welcome back
      </Button> */}

      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modalTitle">Welcome back</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <div className="email">
          <form id="form" className="form">
            <div class="row-check">
                <div class="col">
                    <label>Email</label>
                    <br />
                    <input className="input" id="name"  type="text"/>
                </div>
                <div class="col">
                    <label>Password</label> <label> <small className="small">  Forgot Your Password ?</small></label>
                    <br />
                    <input className="input" id="father" placeholder="Password" type="password" />
                </div>
            </div>
            <Button className="loginBtn" > Login</Button>
            </form>
          </div>
          <div className="google">
            <p>or</p>
            <div className="socialBtns">
            <Button className="appleBtn" > <BsApple className="icon" /> Continue with Apple </Button>
            <Button className="googleBtn" > <FcGoogle className="icon" /> Continue with Google</Button>
            <Button className="facebookBtn" > <SiFacebook className="icon" /> Continue with Facebook</Button> <br />
            <div className="accna" >Don't Have an Account ? <Button className="signupBtn" >Sign up</Button> </div>
            </div>
            <div className="captcha">This site is protected by reCAPTCHA and the Google <span className="captchaPurple">Privacy Policy</span>
            <br /> and <span className="captchaPurple">Terms of Service apply.</span></div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
