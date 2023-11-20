import React from "react";
import "./Main.css";

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditNote = (key, value) => {
    const updatedNote = {
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    };

    onUpdateNote(updatedNote);
  };

  if (!activeNote)
    return <div className="noActiveNote">ノートが選択されていません</div>;

  return (
    <div className="appMain">
      <div className="appMainNoteEdit">
        <input
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id="content"
          placeholder="ノート内容を記入"
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className="appMainNotePreview">
        <h1 className="previewTitle">{activeNote.title}</h1>
        <div className="markdownPreview">{activeNote.content}</div>
      </div>
    </div>
  );
};

export default Main;
