import React from "react";
import "./Welcome.css";
// import { signUp } from "../api";

const Todo = (props) => {
  return (
    <div className={`card border-0 shadow card--Todos is-show`}>
      <h2 className="card-title">WELCOME to TODO page!</h2>
      <p>Welcome to the todo page</p>
      <div className="btn-wrap">할일 목록</div>
      {/* {signUp({ email: "hello@gmail.com", password: "12341234123" })} */}
    </div>
  );
};

export default Todo;
