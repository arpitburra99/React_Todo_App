const TodoReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case "EDIT_TODO":
      return {
        ...state,
        edit: { todo: action.payload, editMode: true },
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, text: action.payload.text }
            : item
        ),
        edit: { todo: {}, editMode: false },
      };
  }
};

export default TodoReducer;
