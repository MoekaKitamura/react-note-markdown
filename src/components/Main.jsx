import React from "react";
import "./Main.css";

const Main = ({ activeNote }) => {
  if (!activeNote)
    return <div className="noActiveNote">ノートが選択されていません</div>;

  return (
    <div className="appMain">
      <div className="appMainNoteEdit">
        <input type="text" />
        <textarea id="" placeholder="ノート内容を記入"></textarea>
      </div>
      <div className="appMainNotePreview">
        <h1 className="previewTitle">{activeNote.title}</h1>
        <div className="markdownPreview">{activeNote.content}</div>
      </div>
    </div>
  );
};

export default Main;
