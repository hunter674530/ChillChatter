import React from "react";
import { useState, useEffect } from "react";
import Note from "./Note";

const Notes = ({ user }) => {
  const [formErrors, setFormErrors] = useState([]);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    fetch("/notes")
      .then((r) => r.json())
      .then((notes) => notes.filter((note) => note.user.id === user.id))
      .then(setNotes);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      user_id: user.id,
      content: newNote,
    };
    fetch("/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((note) => {
          setNotes([...notes, note]);
          setFormErrors([]);
        });
      } else {
        r.json().then((err) => setFormErrors(err.errors));
      }
    });
  }
  function removeNote(oldNote) {
    setNotes(notes.filter((note) => note.id !== oldNote.id));
  }
  function changeNote(changedNote) {
    const filteredNotes = notes.filter((note) => note.id !== changedNote.id);
    setNotes([...filteredNotes, ...changedNote]);
  }
  console.log(notes);
  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          removeNote={removeNote}
          user={user}
          changeNote={changeNote}
        />
      ))}
      <form onSubmit={handleSubmit}>
        <label htmlFor="newNote">New:</label>
        <input
          type="string"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />

        {formErrors.length > 0
          ? formErrors.map((err) => (
              <p key={err} style={{ color: "red" }}>
                {err}
              </p>
            ))
          : null}
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default Notes;
