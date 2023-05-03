import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap"

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password || !name) {
      setErrorMessage("Email, password and name are required.");
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name })
    };

    fetch(`http://5.22.217.225:8081/api/v1/auth/register`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.token);
        if (data.data.token) {
            
            window.location.href = `http://5.22.217.225:8081/api/v1/book/`;
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
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Fill your name"id="name"
          value={name}
          onChange={(event) => setName(event.target.value)} />
      </Form.Group>
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

export default Register;
