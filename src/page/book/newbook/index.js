import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap"

function NewBook() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const token = sessionStorage.getItem("token");

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `${token}`
     },
      body: JSON.stringify({ title, description, year })
    };

    fetch(`http://5.22.217.225:8081/api/v1/book`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
       
        if (data.status) {
            window.location.href = `/dashboard`;
        } else {
          setErrorMessage("Invalid request");
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("An error occurred while inserting a new book.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
    <Form className="rounded p-4 p-sm-3" onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label>Book Title</Form.Label>
      <Form.Control type="text" placeholder="Fill the book title"id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)} />
      </Form.Group>
      <Form.Group>
      <Form.Label>Book year</Form.Label>
      <Form.Control type="number" placeholder="Enter book edition year"id="year"
          value={year}
          onChange={(event) => setYear(parseInt(event.target.value))} />
      </Form.Group>

      <Form.Group>
      <Form.Label>Description</Form.Label>
      <Form.Control type="text" placeholder="Enter book description" id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}/>
      </Form.Group>
      <Alert variant="danger">
      {errorMessage && <p>{errorMessage}</p>}
      </Alert>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
    </div>
  );
}

export default NewBook;
