import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {signIn,setUser}=useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/catagory/0';
    const handleLogin = (e)=>{
        e.preventDefault();
        const form= e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then((result)=>{
            const loggedUser = result.user;
            navigate(from,{replace:true});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <Container>
            <Form onSubmit={handleLogin} style={{margin: 'auto',marginTop:'20px', width:'400px'}}>
            <h5>Please Login</h5>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required/>
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <Form.Text>
                <p>Don't have an account? <Link to="/register">Register</Link> </p>
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

export default Login;