import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="appSidebar">
      <div className="appSidebarHeader">
        <h1>NOTE</h1>
        <button>追加</button>
      </div>
      <div className="appSidebarNotes">
        <div className="appSidebarNote">
          <div className="appSidebarNoteTitle">
            <strong>タイトル</strong>
            <button>削除</button>
          </div>
          <p>ノートの内容です</p>
          <small>最終更新日：**/**</small>
        </div>
      </div>
      Sidebar
    </div>
  );
};

export default Sidebar;
