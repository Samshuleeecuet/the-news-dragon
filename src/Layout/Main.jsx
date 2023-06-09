import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav';
import RightNav from '../pages/Shared/RightNav';
import NavigationBar from '../pages/Shared/NavigationBar';

const Main = () => {
    return (
        <>
           <Header></Header>
           <NavigationBar></NavigationBar>
           <Container>
            
            <Row>
              <Col lg={3}>
                <LeftNav></LeftNav>
              </Col>
              <Col lg={6}>
                <Outlet></Outlet>
              </Col>
              <Col lg={3}>
                <RightNav></RightNav>
              </Col>
            </Row>
          </Container>
           <Footer></Footer> 
        </>
    );
};

export default Main;