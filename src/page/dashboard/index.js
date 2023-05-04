import React, { useEffect, useState } from "react";
import { Form, Button, Image } from "react-bootstrap";

function Dashboard() {
  const [userData, setUserData] = useState([]);
  const token = sessionStorage.getItem("token");
  const [errorMessage, setErrorMessage] = useState("");
  

  useEffect(() => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  };
  fetch(`http://5.22.217.225:8081/api/v1/user/profile`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      setUserData(data.data);
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
          <Form.Label><Image src={userData.profile_picture} alt="Example" fluid /></Form.Label>
        </Form.Group>
        
        <Form.Group>
          <Form.Label>Email: {userData.email}</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Name: {userData.name}</Form.Label>
        </Form.Group>

        <Button variant="primary" type="submit" href="/books">
          Get All Books
        </Button>
      </Form>
    </div>
  );
}

export default Dashboard;
