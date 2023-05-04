import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap"

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    };

    fetch(`http://5.22.217.225:8081/api/v1/auth/login`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.data.token) {
            sessionStorage.setItem('token',data.data.token);
            window.location.href = `/dashboard`;
        } else {
          setErrorMessage("Invalid email or password.");
          console.log(data);
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("An error occurred while authenticating.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
    <Form className="rounded p-4 p-sm-3" onSubmit={handleSubmit}>
      <Form.Group>
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)} />
          <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
      </Form.Group>
      

      <Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}/>
      </Form.Group>
      <Alert variant="danger">
      {errorMessage && <p>{errorMessage}</p>}
      </Alert>
      <Button variant="primary" type="submit">Login</Button>
    </Form>
    </div>
  );
}

export default LoginPage;
