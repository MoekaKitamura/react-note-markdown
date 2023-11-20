import React from "react";
import "./Sidebar.css";

const Sidebar = ({
  onAddNote,
  onDeleteNote,
  notes,
  activeNoteId,
  setActiveNoteId,
}) => {
  return (
    <div className="appSidebar">
      <div className="appSidebarHeader">
        <h1>NOTE</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className="appSidebarNotes">
        {notes.map((note) => (
          <div
            className={`appSidebarNote ${note.id === activeNoteId && "active"}`}
            key={note.id}
            onClick={() => setActiveNoteId(note.id)}
          >
            <div className="appSidebarNoteTitle">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>削除</button>
            </div>
            <p>{note.content}</p>
            <small>
              最終更新日：
              {new Date(note.modDate).toLocaleDateString("ja-JP", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
