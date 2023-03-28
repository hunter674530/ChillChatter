import React from "react";
import { useState, useEffect } from "react";

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
        /*nav to login*/
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div className="App">
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Create Account"}
        </button>
        {errors.map((err) => (
          <h1>{err}</h1>
        ))}
      </form>
      <button onClick={changeClicked}>Login</button>
    </div>
  );
};

export default SignUp;
