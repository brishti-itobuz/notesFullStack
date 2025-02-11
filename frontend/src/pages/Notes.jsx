import React, { useState } from "react";
import axios from "axios";

function Note() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const handleSaveNote = () => {
    setNotes([...notes, { title, content }]);
    setTitle("");
    setContent("");
  };
const handleNoteCreation = async () => {
    try {
        const response = await axios.post('http://localhost:3001/note/addNote', { text: noteText });
        setNoteText(''); 
    } catch (error) {
         console.error('Error creating note:', error);
    }
};
return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}placeholder="Title"/>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"/>
      <button onClick={handleSaveCreation}>Save Note</button>

      {notes.map((note, index) => (
        <div key={index}>
          <h3>{note.title}</h3>

          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Note;




