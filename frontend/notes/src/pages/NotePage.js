import React from "react";
import Form from "react-bootstrap/Form";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdEdit,
  MdDelete,
} from "react-icons/md";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const NotePage = ({ note, key }) => {
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    navigate(`/edit/${note.id}`);
    console.log("edit completed!");
  };
  const handleDelete = async (e) => {
    await axios.delete(`/api/notes/${note.id}`);
    console.log("delete completed!");
    navigate("/");
  };

  return (
    <div className="notes-list-item">
      <span>{note.title}</span>
      {note.completed === true ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      <div>
        <form action="" onClick={handleEdit}>
          <MdEdit />
        </form>
        <form action="" onClick={handleDelete}>
          <MdDelete />
        </form>
      </div>
    </div>
  );
};

export default NotePage;
