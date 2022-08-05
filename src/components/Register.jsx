import React from "react";
import "./Welcome.css";

const Register = (props) => {
  const { isShow, handleClick } = props;
  return (
    <div className={`card border-0 shadow card--register ${isShow === "register" ? "is-show" : ""} `} id="register">
      <div className="card-body">
        <h2 className="card-title">Create Account</h2>
        <p className="card-text">
          Enter your personal details
          <br />
          use your email for registration
        </p>
        <form>
          <div className="form-group">
            <input className="form-control" type="email" placeholder="Email" required="required" />
          </div>
          <div className="form-group">
            <input className="form-control" type="password" placeholder="Password" required="required" />
          </div>
          <button className="btn btn-lg" data-target="welcome">
            REGISTER
          </button>
        </form>
      </div>
      <button className="btn btn-back js-btn fas fa-angle-left" onClick={(e) => handleClick(e)} data-target="welcome"></button>
    </div>
  );
};

export default Register;
