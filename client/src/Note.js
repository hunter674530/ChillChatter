import React from "react";
import { useState } from "react";

function Note({ note, removeNote, user, changeNote }) {
  const [content, setContent] = useState(note.content);

  function handleDelete() {
    fetch(`/notes/${note.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((oldNote) => removeNote(oldNote));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      user_id: user.id,
      content: content,
    };
    fetch(`/notes/${note.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((changedNote) => {
          changeNote(changedNote);
        });
      }
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="content"></label>
        <input
          type="string"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Confirm</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default Note;
