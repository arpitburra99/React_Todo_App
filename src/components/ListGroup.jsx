import React, { useContext } from "react";
import ListItem from "./ListItem";
import TodoContex from "../context/TodoContext";

const ListGroup = () => {
  const { todos, deleteTodo, editTodo } = useContext(TodoContex);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default ListGroup;
