import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
        <div className='text-center'>
            <img src={logo} alt="" />
            <h5 className='text-secondary'><small>Journalism Without Fear or Favour</small></h5>
            <h5 className='text-monospace'>{moment().format("dddd, MMMM D, YYYY")}</h5>
        </div>
        <div className='d-flex'>
        <Button variant="danger">Latest</Button>
        <Marquee speed={50} pauseOnHover={true} className='text-danger'>
  I can be a React component, multiple React components, or just some text.... I can be a React component, multiple React components, or just some text.... I can be a React component, multiple React components, or just some text....
</Marquee>
        </div>


        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Career</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets"> Profile</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        <Button variant="secondary">Log in</Button>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </Container>
        
    );
};

export default Header;