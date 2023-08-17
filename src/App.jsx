import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <Navbar />
      <div className="container my-5">
        <Form />
        <ListGroup />
        <ToastContainer />
      </div>
    </TodoProvider>
  );
};

export default App;
