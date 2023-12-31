import React, { useState } from "react";
import { Button, InputGroup, FormControl, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  console.log("titles", title);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const createNote = async () => {
    if (!title) return;

    let response = await axios
      .post(`/api/notes/`, {
        title: title,
      })
      .then((response) => {
        // response.json
        window.location.reload()
      })
      .catch((err) => alert(err));

    navigate("/");
  };

  return (
    <Form>
      <InputGroup className="mb-4">
        <FormControl
          placeholder="New Todo..."
          onChange={handleChange}
          value={title}
        />
        <Button type="submit" onClick={createNote}>
          Add
        </Button>
      </InputGroup>
    </Form>
  );
};

export default TodoForm;
