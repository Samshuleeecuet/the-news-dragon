import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const NavigationBar = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLogout = () =>{
        logOut()
        .then()
        .catch()
    }
    return (
        <Container className='align-items-center '>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto gap-3">
                    <Link to="/catagory/0">Home</Link>
                    <Link>About</Link>
                    <Link>Career</Link>
                </Nav>
                <Nav>
                    {user && <FaUserCircle style={{fontSize:'1.85rem'}}/>}
                        {
                            user? 
                            <Button onClick={handleLogout} variant="secondary">Log Out</Button>:
                            <Link to="/login"><Button variant="secondary">Log in</Button></Link>
                        }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </Container>
    );
};

export default NavigationBar;