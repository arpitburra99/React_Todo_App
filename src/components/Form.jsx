import React, { useContext, useEffect, useState } from "react";
import TodoContex from "../context/TodoContext";
import { toast } from "react-toastify";

const Form = () => {
  const { saveTodo, edit, updateTodo } = useContext(TodoContex);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.editMode) {
      updateTodo(edit.todo.id, text);
      toast.success("Update Successfully");
    } else {
      saveTodo(text);
      toast.success("Add Successfully");
    }
    setText("");
  };

  useEffect(() => {
    setText(edit.todo.text);
  }, [edit]);

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Text Here..."
        className="form-control"
        onChange={(e) => setText(e.target.value)}
        value={text}
        required
      />
      <button className="btn btn-success w-100 my-2">Save</button>
    </form>
  );
};

export default Form;
