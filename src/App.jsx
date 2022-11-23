import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from './assets/logow.png'
import { BsFillPersonFill  }from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi"
import { AiFillCar} from "react-icons/ai"
import {GiHouseKeys } from "react-icons/gi"
import {BiSupport} from "react-icons/bi"
import {BsShieldCheck} from 'react-icons/bs'
import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import Banner from './assets/banner.jpg'


function CollapsibleExample() {
  return (
    <Navbar className='navbar' collapseOnSelect expand="lg">
      <Container className='navbar-con' >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
        <Nav className='navright' >
          <NavDropdown title={ <GiHamburgerMenu />} >
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Signup
              </NavDropdown.Item>
              <NavDropdown.Item> <AiFillCar /> Become a host</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item> <GiHouseKeys /> How turo works</NavDropdown.Item>
              <NavDropdown.Item> <BiSupport /> Contact Support</NavDropdown.Item>
              <NavDropdown.Item> <BsShieldCheck/> Insurance & Protection</NavDropdown.Item>         
            </NavDropdown>
          </Nav>
          <Button className='hostBtn' variant="light">Become a host</Button>
        <Nav className="me-auto">
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand  href="#home"><img className='logo' src={logo} alt="" /> </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;


// Banner


export function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 banner"
          src= {Banner}
          alt="First slide"
        />
     
     
      </Carousel.Item>
    </Carousel>
  );
}
