import React from "react";
import "./Welcome.css";

const Login = (props) => {
  const { isShow, handleClick } = props;

  return (
    <div className={`card border-0 shadow card--login ${isShow === "login" ? "is-show" : ""} `} id="login">
      <div className="card-body">
        <h2 className="card-title">Welcome Back!</h2>
        <p>
          To keep connected with us
          <br />
          please login with your personal info
        </p>
        <p>use your account</p>
        <form>
          <div className="form-group">
            <input className="form-control" type="email" placeholder="Email" required="required" />
          </div>
          <div className="form-group">
            <input className="form-control" type="password" placeholder="Password" required="required" />
          </div>
          <button className="btn btn-lg">LOGIN</button>
        </form>
      </div>
      <button className="btn btn-back js-btn fas fa-angle-left" onClick={(e) => handleClick(e)} data-target="welcome"></button>
    </div>
  );
};

export default Login;
