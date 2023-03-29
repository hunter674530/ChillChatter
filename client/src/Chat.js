import React from "react";
import Button from "react-bootstrap/Button";

function Chat({ chat, displayMessages }) {
  function showMessages() {
    const newChat = chat;
    displayMessages(newChat);
  }

  return (
    <div>
      <Button variant="info" onClick={showMessages}>
        {chat.name}
      </Button>
    </div>
  );
}

export default Chat;
