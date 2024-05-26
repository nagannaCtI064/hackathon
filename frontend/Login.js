import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Email:', email, 'Password:', password);
    
   
    navigate('/home');
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit} className="shadow p-4 mb-4 bg-white">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
        {}
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginForm;
