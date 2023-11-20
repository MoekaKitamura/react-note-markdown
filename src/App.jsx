import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState(
    // JSONからjsに戻して使用
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [activeNoteId, setActiveNoteId] = useState();

  useEffect(() => {
    // 1番目のノートがactiveになるように
    setActiveNoteId(notes[0].id);
  }, []);

  useEffect(() => {
    // localStorageへ保存(JSON形式にする)
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    // 追加を押した時に作られるノート
    const newNote = {
      id: uuidv4(),
      title: "新しいノート",
      content: "",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const onDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const activeNote = notes.find((note) => note.id === activeNoteId);

  const onUpdateNote = (updatedNote) => {
    const updatedNoteList = notes.map((note) => {
      return note.id === updatedNote.id ? updatedNote : note;
    });

    setNotes(updatedNoteList);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        notes={notes}
        activeNoteId={activeNoteId}
        setActiveNoteId={setActiveNoteId}
      />
      <Main activeNote={activeNote} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
