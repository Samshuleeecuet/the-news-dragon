import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import NavigationBar from './NavigationBar';

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


        </Container>
        
    );
};

export default Header;