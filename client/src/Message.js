import React from "react";
import { useState, useEffect } from "react";

function Message({ message, user }) {
  useEffect(() => {
    fetch(`/users/${message.user_id}`)
      .then((r) => r.json())
      .then(console.log);
  }, []);

  return (
    <div>
      {message.user_id === user.id ? (
        <p>{message.content}</p>
      ) : (
        <p style={{ color: "red" }}>{message.content}</p>
      )}
    </div>
  );
}

export default Message;
