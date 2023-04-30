import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebookF,FaTwitter ,FaInstagram} from 'react-icons/fa';
import QZone from './QZone';
import bg from '../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button variant="outline-primary" className='mb-2'><FaGoogle/> Login with google </Button>
            <Button variant="outline-secondary"><FaGithub/>Login with Github</Button>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF/>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/>Instragam</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className=''>
                <img className='' src={bg} alt="" />
                <div>
                    <h3>
                    Create an Amazing Newspaper
                    </h3>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                </div>
            </div>
        </div>
    );
};

export default RightNav;