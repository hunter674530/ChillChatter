import React from "react";
import { useState, useEffect } from "react";

const Notes = ({ user }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/notes")
      .then((r) => r.json())
      .then((notes) => notes.filter((note) => note.user.id === user.id))
      .then(setNotes);
  }, []);
  console.log(notes);
  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <p>{note.content}</p>
      ))}
    </div>
  );
};

export default Notes;
