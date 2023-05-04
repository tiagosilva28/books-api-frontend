import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import "../../index.css"

function Books(){
const [userData, setUserData] = useState ([]);
const [errorMessage, setErrorMessage] = useState("");

useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(`http://5.22.217.225:8081/api/v1/book/?sort_by=year&order_by=desc`, requestOptions)
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
  <div className="card-container">
    {userData.map((item) => (
    <Card key={item.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.book_cover} />
    <Card.Body>
      <Card.Title>{item.title} - {item.year}</Card.Title>
      <Card.Text>
        {item.description}
      </Card.Text>
      <Button variant="primary">Update Book</Button>
    </Card.Body>
  </Card>
  ))}
  </div>
  )


}

export default Books;