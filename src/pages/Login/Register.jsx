import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <Container>
            <Form style={{margin: 'auto',marginTop:'20px', width:'400px'}}>
            <h5>Please Register</h5>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Name" required/>
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control type="text" name='photourl' placeholder="Enter photo url" required/>
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required/>
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name="accept" label="Accept Terms and Conditions" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <Form.Text>
                <p>Have an account? <Link to="/login">Login</Link> </p>
            </Form.Text>
            <Form.Text className="text-danger">
                We'll never share your email with anyone else.
            </Form.Text>
            <Form.Text className="text-success">
                We'll never share your email with anyone else.
            </Form.Text>
    </Form>
        </Container>
    );
};

export default Register;