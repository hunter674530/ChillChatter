import React from "react";
import { useState } from "react";
import "./App.css";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Chats from "./Chats";
import Notes from "./Notes";
import NoPage from "./NoPage";
import SignUp from "./SignUp";

function App() {
  const [user, setUser] = useState({});
  const [clicked, setClicked] = useState(false);

  function changeClicked() {
    setClicked(!clicked);
  }
  function changeUser(newUser) {
    setUser(newUser);
    console.log(user);
  }

  function logOut() {
    fetch(`/logout`, {
      method: "DELETE",
    }).then(changeUser({}));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user.id ? <NavBar /> : null}>
          <Route
            index
            element={
              user.id ? (
                <button onClick={logOut}>Logout</button>
              ) : clicked ? (
                <SignUp changeClicked={changeClicked} />
              ) : (
                <Login changeUser={changeUser} changeClicked={changeClicked} />
              )
            }
          />
          <Route path="home" element={<Home user={user} />} />
          <Route path="chats" element={<Chats user={user} />} />
          <Route path="notes" element={<Notes user={user} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
