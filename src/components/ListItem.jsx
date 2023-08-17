import React from "react";
import { toast } from "react-toastify";

const ListItem = ({ todo, deleteTodo, editTodo }) => {
  const handleDelete = () => {
    deleteTodo(todo.id);
    toast.error("Delete Todo!");
  };

  const handleEdit = () => {
    editTodo(todo);
    toast.warning("Edit Todo!");
  };

  return (
    <li className="list-group-item">
      {todo.text}
      <button className="btn btn-danger float-end" onClick={handleDelete}>
        Delete
      </button>
      <button className="btn btn-warning float-end mx-2" onClick={handleEdit}>
        Edit
      </button>
    </li>
  );
};

export default ListItem;
