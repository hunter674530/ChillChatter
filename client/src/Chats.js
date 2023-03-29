import React from "react";
import { useState, useEffect } from "react";
import Chat from "./Chat";
import Message from "./Message";

const Chats = ({ user }) => {
  const [formErrors, setFormErrors] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

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

  return (
    <div>
      <h1>Chats</h1>
      {chats.map((chat) => (
        <Chat chat={chat} displayMessages={displayMessages} />
      ))}
      {currentChat.id
        ? messages.map((message) => <Message message={message} user={user} />)
        : null}
      {currentChat.id ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="newMessage"></label>
          <input
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
          <button type="submit">Send</button>
        </form>
      ) : null}
    </div>
  );
};

export default Chats;
