import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { MdAccountCircle } from "react-icons/md";
import { GiHouseKeys } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { BsShieldCheck, BsFillPersonFill } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import React, { useState } from "react";
import { auth } from "../../firebase/config";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getAuth,
  FacebookAuthProvider
} from "firebase/auth";
import { async } from "@firebase/util";
import {BiLogOut} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import swal from 'sweetalert';


const google_provider = new GoogleAuthProvider();
const facebook_provider = new FacebookAuthProvider();



window.onload = async () => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      console.log(`User is currently Login`);
    } else {
      console.log("Not Available");
    }
  });
};

export function CollapsibleExample() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [signupShow, setSignupShow] = useState(false);
  const signupHandleClose = () => setSignupShow(false);
  const signupHandleShow = () => setSignupShow(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");


  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log("error message" + error);
    }
  };

  const signup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        regEmail,
        regPassword
      );
      console.log("User Registred Succesfully");
      swal("Registered", "Account Registered Sucesfully", "success");
    } catch (error) {
      console.log(error);
    }

  };

const auth = getAuth();

const facebookLogin = async () => {
  signInWithPopup(auth, facebook_provider)
  .then((result) => {
    const user = result.user;
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    console.log(user)

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    console.log(errorMessage)

    // ...
  });
}
  const loginwithGoogle= async () =>{
    await signInWithPopup(auth, google_provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user)
        // ...
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  return (
    <Navbar className="navbar" collapseOnSelect expand="lg">
      <Container className="navbar-con">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navright">
            <NavDropdown title={<GiHamburgerMenu />}>
              <NavDropdown.Item onClick={handleShow}>Login</NavDropdown.Item>
              {/* Login Modal Starts Here*/}
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
                          <input
                            className="input"
                            id="email"
                            type="text"
                            onChange={(event) => {
                              setLoginEmail(event.target.value);
                            }}
                          />
                        </div>
                        <div class="col">
                          <label>Password</label>{" "}
                          <label>
                            {" "}
                            <small className="small">
                              {" "}
                              Forgot Your Password ?
                            </small>
                          </label>
                          <br />
                          <input
                            className="input"
                            id="password"
                            placeholder="Password"
                            type="password"
                            onChange={(event) => {
                              setLoginPassword(event.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <Button
                        id="loginBtn"
                        onClick={login}
                        className="loginBtn"
                      >
                        {" "}
                        Login
                      </Button>
                    </form>
                  </div>
                  <div className="google">
                    <p>or</p>
                    <div className="socialBtns">
                      <Button className="appleBtn">
                        {" "}
                        <BsApple className="icon" /> Continue with Apple{" "}
                      </Button>
                      <Button className="googleBtn">
                        {" "}
                        <FcGoogle className="icon" /> Continue with Google
                      </Button>
                      <Button className="facebookBtn">
                        {" "}
                        <SiFacebook className="icon" /> Continue with Facebook
                      </Button>{" "}
                      <br />
                      <div className="accna">
                        Don't Have an Account ?{" "}
                        <Button className="signupBtn">Sign Up</Button>{" "}
                      </div>
                    </div>
                    <div className="captcha">
                      This site is protected by reCAPTCHA and the Google{" "}
                      <span className="captchaPurple">Privacy Policy</span>
                      <br /> and{" "}
                      <span className="captchaPurple">
                        Terms of Service apply.
                      </span>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
              {/* Login Modal Ends here*/}

              {/***********************************************************************************************************/}

              <NavDropdown.Item onClick={signupHandleShow}>
                Signup
              </NavDropdown.Item>

              <Modal
                className="modal"
                show={signupShow}
                onHide={signupHandleClose}
              >
                <Modal.Header closeButton>
                  ``
                  <Modal.Title className="modalTitle">
                    Welcome to Turo
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                  <div className="email">
                    <form id="form" className="form">
                      <div class="row-check">
                        <div class="col">
                          <label>Full Name</label>
                          <br />
                          <input
                            className="input"
                            id="email"
                            type="text"
                            onChange={(event) => {
                              setRegName(event.target.value);
                            }}
                          />
                        </div>
                        <small style={{ fontSize: "small" }}>
                          Enter your name as it appears to driving license
                        </small>
                        <div class="col">
                          <label>Email</label>
                          <br />
                          <input
                            className="input"
                            id="email"
                            type="text"
                            onChange={(event) => {
                              setRegEmail(event.target.value);
                            }}
                          />
                        </div>
                        <div class="col">
                          <label>Password</label> <br />
                          <input
                            className="input"
                            id="password"
                            placeholder="Password"
                            type="password"
                            onChange={(event) => {
                              setRegPassword(event.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <Button
                        id="loginBtn"
                        className="loginBtn"
                        onClick={signup}
                      >
                        {" "}
                        Sign Up
                      </Button>
                    </form>
                  </div>
                  <div className="google">
                    <p>or</p>
                    <div className="socialBtns">
                      <Button className="appleBtn">
                        {" "}
                        <BsApple className="icon" /> Continue with Apple{" "}
                      </Button>
                      <Button onClick={loginwithGoogle} className="googleBtn">
                        {" "}
                        <FcGoogle className="icon" /> Continue with Google
                      </Button>
                      <Button onClick={facebookLogin} className="facebookBtn">
                        {" "}
                        <SiFacebook  className="icon" /> Continue with Facebook
                      </Button>{" "}
                      <br />
                      <div className="accna">
                        Already have an Account ?{" "}
                        <Button className="signupBtn">Login</Button>{" "}
                      </div>
                    </div>
                    <div className="captcha">
                      This site is protected by reCAPTCHA and the Google{" "}
                      <span className="captchaPurple">Privacy Policy</span>
                      <br /> and{" "}
                      <span className="captchaPurple">
                        Terms of Service apply.
                      </span>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>

              {/* Signup Modal Ends Here */}
              {/***********************************************************************************************************/}

              <NavDropdown.Item id="profile_icon">
                <VscAccount style={{ fontSize: "large"}} /> <Link style={{textDecoration : 'none', color:'black'}} to='/profile'>Profile</Link>
              </NavDropdown.Item>
              <NavDropdown.Item id="account_icon">
                <BsFillPersonFill style={{ fontSize: "large" }} /> Account
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
                {" "}
                <AiFillCar style={{ fontSize: "large" }} /> Become a host
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                {" "}
                <GiHouseKeys style={{ fontSize: "large" }} /> How turo works
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <BiSupport style={{ fontSize: "large" }} /> Contact Support
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <BsShieldCheck style={{ fontSize: "large" }} /> Insurance &
                Protection
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                {" "}
                <BiLogOut style={{ fontSize: "large" }} /> log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* Navbar Dropdown eNDS */}

          <Button className="hostBtn" variant="light">
            Become a host
          </Button>
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="" />{" "}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
