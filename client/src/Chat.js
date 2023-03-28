import React from "react";

function Chat({ chat, displayMessages }) {
  function showMessages() {
    const newChat = chat;
    displayMessages(newChat);
  }

  return (
    <div>
      <button onClick={showMessages}>{chat.name}</button>
    </div>
  );
}

export default Chat;
