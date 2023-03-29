import React from "react";
import { useState, useEffect } from "react";
import Chat from "./Chat";
import Message from "./Message";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./App.css";

const Chats = ({ user }) => {
  const [formErrors, setFormErrors] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [newChat, setNewChat] = useState("");

  useEffect(() => {
    fetch("/chats")
      .then((r) => r.json())
      .then(setChats);
  }, []);
  function displayMessages(newChat) {
    setMessages(newChat.messages);
    setCurrentChat(newChat);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      user_id: user.id,
      chat_id: currentChat.id,
      content: newMessage,
    };
    fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((message) => {
          setMessages([...messages, message]);
          setNewMessage("");
          setFormErrors([]);
        });
      } else {
        r.json().then((err) => setFormErrors(err.errors));
      }
    });
  }
  function handleSubmit2(e) {
    e.preventDefault();
    const formData = {
      name: newChat,
    };
    fetch("/chats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((chat) => {
          setChats([...chats, chat]);
          setFormErrors([]);
        });
      } else {
        r.json().then((err) => setFormErrors(err.errors));
      }
    });
  }
  return (
    <Container className="bottom">
      <h2 className="leftBasic">Chats</h2>
      <Row>
        {chats.map((chat) => (
          <Col className="chatSpace">
            <Chat chat={chat} displayMessages={displayMessages} />
          </Col>
        ))}
        <Col xs={8}>
          <form onSubmit={handleSubmit2}>
            <label htmlFor="newChat">New:</label>
            <input
              className="Disappear"
              type="string"
              value={newChat}
              onChange={(e) => setNewChat(e.target.value)}
            />
            <Button type="submit">Create</Button>
            {formErrors.length > 0
              ? formErrors.map((err) => (
                  <p key={err} style={{ color: "red" }}>
                    {err}
                  </p>
                ))
              : null}
          </form>
        </Col>
      </Row>
      {currentChat.id ? (
        <div>
          <h3 className="leftBasic">{currentChat.name}</h3>
          <div className="messageSpace">
            {messages.map((message) => (
              <Message message={message} user={user} />
            ))}
          </div>
        </div>
      ) : null}
      {currentChat.id ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="newMessage"></label>
          <input
            className="Disappear"
            type="string"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />

          {formErrors.length > 0
            ? formErrors.map((err) => (
                <p key={err} style={{ color: "red" }}>
                  {err}
                </p>
              ))
            : null}
          <Button type="submit">Send</Button>
        </form>
      ) : null}
    </Container>
  );
};

export default Chats;
