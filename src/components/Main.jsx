import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="appMain">
      <div className="appMainNoteEdit">
        <input type="text" />
        <textarea id="" placeholder="ノート内容を記入"></textarea>
      </div>
      <div className="appMainNotePreview">
        <h1 className="previewTitle">タイトル</h1>
        <div className="markdownPreview">プレビュー</div>
      </div>
    </div>
  );
};

export default Main;
