import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import { GiHouseKeys } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import React, { useState } from "react";

import "../../App.css";

export function CollapsibleExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="navbar" collapseOnSelect expand="lg">
      <Container className="navbar-con">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navright">
            <NavDropdown title={<GiHamburgerMenu />}>
              <NavDropdown.Item onClick={handleShow}>Login</NavDropdown.Item>
              {/* Modal Starts Here*/}
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
                          <input className="input" id="name" type="text" />
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
                            id="father"
                            placeholder="Password"
                            type="password"
                          />
                        </div>
                      </div>
                      <Button className="loginBtn"> Login</Button>
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
                        <Button className="signupBtn">Sign up</Button>{" "}
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
              {/* Modal Ends here*/}
              <NavDropdown.Item href="#action/3.2">Signup</NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <AiFillCar /> Become a host
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                {" "}
                <GiHouseKeys /> How turo works
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <BiSupport /> Contact Support
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <BsShieldCheck /> Insurance & Protection
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
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
