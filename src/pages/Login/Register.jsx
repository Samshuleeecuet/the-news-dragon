import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
const Register = () => {
    const {createUserwithEmail} = useContext(AuthContext);
    //const [error,setError] = useState("")
    const [error, setError] = useState("");
    const [accept, setAccept] = useState(false);


    const handleRegister = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photourl = form.photourl.value;

        console.log(name,email,password,photourl);
        createUserwithEmail(email,password)
        .then((result)=>{
            console.log(result.user);
            const createdUser = result.user;
        })
        .catch(err=>{
            setError(err.message);
        })
    }

    const handleAccpet = (e)=>{
        setAccept(e.target.checked);
    }
    return (
        <Container>
            <Form onSubmit={handleRegister} style={{margin: 'auto',marginTop:'20px', width:'400px'}}>
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
                <Form.Check onClick={handleAccpet} type="checkbox" name="accept" label={<>Accept <Link to="/terms">Terms and Register</Link></>} />
            </Form.Group>
            <Button variant="primary" disabled={!accept} type="submit">
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