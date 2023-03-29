import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SignUp = ({ changeClicked }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password);
    setIsLoading(true);
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        changeClicked();
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div className="App">
      <h1 className="title">ChillChatter</h1>
      <h2>SignUp</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Label className="Space" htmlFor="username">
          Username
        </Form.Label>
        <Form.Control
          className="TextBox"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Label className="Space" htmlFor="password">
          Password
        </Form.Label>
        <Form.Control
          className="TextBox"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="Space" type="submit">
          {isLoading ? "Loading..." : "Create Account"}
        </Button>
        {errors.map((err) => (
          <h1>{err}</h1>
        ))}
      </Form>
      <Button className="SignUpButton" size="lg" onClick={changeClicked}>
        Back to Login
      </Button>
    </div>
  );
};

export default SignUp;
