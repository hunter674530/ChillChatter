import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./App.css";

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
    <div className="Space">
      <form onSubmit={handleSubmit}>
        <label htmlFor="content"></label>
        <input
          className="Blend"
          type="string"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <ButtonGroup>
          <Button type="submit">Confirm</Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
}
export default Note;
