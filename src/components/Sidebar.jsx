import React from "react";
import "./Sidebar.css";

const Sidebar = ({ onAddNote, notes }) => {
  return (
    <div className="appSidebar">
      <div className="appSidebarHeader">
        <h1>NOTE</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className="appSidebarNotes">
        {notes.map((note) => (
          <div className="appSidebarNote" key={note.id}>
            <div className="appSidebarNoteTitle">
              <strong>{note.title}</strong>
              <button>削除</button>
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
