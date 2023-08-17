import { createContext, useReducer } from "react";
import TodoReducer from "./TodoReducer";

const TodoContex = createContext();

export const TodoProvider = ({ children }) => {
  const initialState = {
    todos: [
      { id: 1, text: "Somthing" },
      { id: 2, text: "Somthing More" },
    ],
    edit: { todo: {}, editMode: false },
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const saveTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
    };
    dispatch({
      type: "SAVE_TODO",
      payload: newTodo,
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const editTodo = (exitingTodo) => {
    dispatch({
      type: "EDIT_TODO",
      payload: exitingTodo,
    });
  };

  const updateTodo = (oldId, newText) => {
    const updatedTodo = {
      id: oldId,
      text: newText,
    };
    dispatch({
      type: "UPDATE_TODO",
      payload: updatedTodo,
    });
  };

  return (
    <TodoContex.Provider
      value={{
        todos: state.todos,
        edit: state.edit,
        saveTodo,
        deleteTodo,
        editTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContex.Provider>
  );
};

export default TodoContex;
