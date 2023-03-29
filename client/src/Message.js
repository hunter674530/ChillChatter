import React from "react";
import { useState, useEffect } from "react";

function Message({ message, user }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch(`/messages/${message.id}`)
      .then((r) => r.json())
      .then((data) => setUsername(data.user.username));
  }, []);

  return (
    <div>
      {message.user_id === user.id ? (
        <p className="left">{message.content}</p>
      ) : (
        <p className="right">
          {message.content}- {username}
        </p>
      )}
    </div>
  );
}

export default Message;
