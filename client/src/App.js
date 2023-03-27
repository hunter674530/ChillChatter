import React from "react";
import { useState } from "react";
import "./App.css";
import Login from "./Login";

function App() {
  const [user, setUser] = useState({});

  function changeUser(newUser) {
    setUser(newUser);
    console.log(user);
  }

  return (
    <div className="App">
      <Login changeUser={changeUser} />
    </div>
  );
}
export default App;
