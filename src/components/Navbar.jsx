import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-light">Todo App</span>
        <button className="btn btn-info btn-sm">Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;
