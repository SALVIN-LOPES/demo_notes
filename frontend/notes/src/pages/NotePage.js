import React, { useEffect, useState } from "react";
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
  // const [isCompleted, setIsCompleted] = useState()
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    navigate(`/edit/${note.id}`);
    console.log("edit completed!");
  };
  const handleDelete = async () => {
    await axios.delete(`/api/notes/${note.id}`);
    console.log("delete completed!");
    window.location.reload();
    navigate("/");
  };

  // const handleComplete = async () => {
  //   await axios.put(`/api/notes/${note.id}`,{
  //     completed : 
  //   });
  //   window.location.reload();
  //   navigate("/");
  // }

  return (
    <div className="notes-list-item">
      <span>{note.title}</span>
      {/* <form action="" onClick={handleComplete}> */}
      <input value="test" type="checkbox" /> 
      {/* </form> */}
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
