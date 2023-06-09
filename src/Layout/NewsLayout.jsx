import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav';

const NewsLayout = () => {
    return (
        <>
           <Header></Header>
           <Container>
            
            <Row>
              
              <Col lg={9}>
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

export default NewsLayout;