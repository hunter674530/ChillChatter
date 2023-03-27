import React from "react";
import { useState } from "react";
import "./App.css";
import Login from "./Login";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Chats from "./Chats";
import Notes from "./Notes";
import NoPage from "./NoPage";

function App() {
  const [user, setUser] = useState({});

  function changeUser(newUser) {
    setUser(newUser);
    console.log(user);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login changeUser={changeUser} />} />
          <Route path="chats" element={<Chats />} />
          <Route path="notes" element={<Notes />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
