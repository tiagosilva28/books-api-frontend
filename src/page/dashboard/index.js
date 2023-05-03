import React, { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap"

function Dashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect (() => {
    /*event.preventDefault();*/

    const token = localStorage.getItem('token');
    const requestOptions = {    
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        'Authorization':`${token}`
        },
    };

    console.log(token)

    fetch(`https://cors-anywhere.herokuapp.com/http://5.22.217.225:8081/api/v1/user/profile`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.success);
        if (data.data.token) {  

            setEmail(data.data.email);
            console.log(email);
            
        } 
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("An error occurred while authenticating.");
      });
    }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
    <Form className="rounded p-4 p-sm-3" >
      <Form.Group>
      <Form.Label>email:{email}</Form.Label>
      <Form.Control type="email" placeholder="Enter email"id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)} />
          <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
      </Form.Group>
      
      <Button variant="primary" type="submit">Login</Button>
    </Form>
    </div>
  );
}

export default Dashboard;
