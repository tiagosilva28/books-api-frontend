import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://5.22.217.225:8081/api/v1/auth/login/username=${username}&password=${password}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // user is authenticated, redirect to dashboard
          window.location.href = "/dashboard";
        } else {
          setErrorMessage("Invalid username or password.");
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("An error occurred while authenticating.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;

