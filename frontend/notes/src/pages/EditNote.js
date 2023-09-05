import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditNote = () => {
  const { id } = useParams();
  const [note, setNote] = useState("");
  console.log("note = ", note);
  const navigate = useNavigate();

  useEffect(() => {
    getNote();
  }, [id]);

  let getNote = async () => {
    const response = await axios.get(`/api/notes/${id}`);
    const data = await response.data;
    setNote(data);
    console.log("note = ", data);
  };
  console.log("edit note = ", note);

  const handleEdit = async () => {
    console.log("success edit!!");

    fetch(`/api/notes/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });

    navigate("/");
  };

  return (
    <div className="note">
      <textarea
        onChange={(e) => {
          setNote({ ...note, title: e.target.value });
        }}
        value={note.title}
      ></textarea>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default EditNote;
