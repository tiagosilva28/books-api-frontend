import React, { useEffect, useState } from "react";
import { Form, Button, Image } from "react-bootstrap";

function Dashboard() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    /*event.preventDefault();*/

    const token = localStorage.getItem("token");
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };
    fetch(
      `https://cors-anywhere.herokuapp.com/http://5.22.217.225:8081/api/v1/user/profile`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setEmail(data.data.email);
          setName(data.data.name);
          setImage(data.data.profile_picture);
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("An error occurred while authenticating.");
      });
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form className="rounded p-4 p-sm-3">
        <Form.Group>
          <Form.Label><Image src={image} alt="Example" fluid /></Form.Label>
        </Form.Group>
        
        <Form.Group>
          <Form.Label>Email: {email}</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Name: {name}</Form.Label>
        </Form.Group>

        <Button variant="primary" type="submit" href="/books">
          Get All Books
        </Button>
      </Form>
    </div>
  );
}

export default Dashboard;
