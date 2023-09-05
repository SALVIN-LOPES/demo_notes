import React, { useEffect, useState } from "react";
import axios from "axios";
import NotePage from "./NotePage";

const NotesListPage = ({todos = []}) => {


  return(
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{todos.length} notes</p>
      </div>
      <div className="notes-list">
        {todos.map((note, index) => (
          <NotePage note={note} key={index} />
        ))}
      </div>
    </div>
  )
};

export default NotesListPage;
