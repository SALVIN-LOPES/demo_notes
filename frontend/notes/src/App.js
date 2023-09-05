import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import axios from "axios";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import TodoForm from "./components/TodoForm";
import Container from "react-bootstrap/Container";
import EditNote from "./pages/EditNote";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/notes/")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  console.log("notes = ", todos);

  return (
    <Router>
      <div className="Router dark">
        <div className="app">
          <div className="app-header">
            <Header />
          </div>
          <TodoForm />
          <Routes>
            <Route path="/" element={<NotesListPage todos={todos} />} />
            <Route path="/edit/:id" element={<EditNote />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
