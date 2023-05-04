import React, { useEffect, useState } from "react";
import { Form, Button, Image } from "react-bootstrap";

function Dashboard() {
  const [userData, setUserData] = useState([]);
  const token = sessionStorage.getItem("token");
  const [errorMessage, setErrorMessage] = useState("");
  const [bookId, setBookId] = useState("");

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
          <Form.Label>
            <Image src={userData.profile_picture} alt="Example" fluid />
          </Form.Label>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email: {userData.email}</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Name: {userData.name}</Form.Label>
        </Form.Group>

        <Button className="mr-4" variant="primary" type="submit" href="/books">
          Get All Books
        </Button>

        <Button variant="info" type="submit" href="/books/newBook">
          Insert new Book
        </Button>

        <Form className="rounded mt-4" /* onSubmit={} */>
          <Form.Group>
            <Form.Label>Find Book by ID</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter the book ID"
              id="email"
              /*  value={} */
              onChange={(event) => setBookId()}
            />
            <Button className="mt-4" variant="primary" type="submit">
              Search
            </Button>
            <Form.Text className="text-muted">
              Don´t be stupid and insert a number
            </Form.Text>
          </Form.Group>
        </Form>
      </Form>
    </div>
  );
}

export default Dashboard;
