import React, { useState } from "react";
import "./Welcome.css";
import { signUp } from "../api.js";

const Register = (props) => {
  const { isShow, handleClick } = props;
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [btnOn, setBtnOn] = useState(false);

  // set email & password
  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.type]: e.target.value });
    if (canRegister(userInfo)) setBtnOn(true);
    else setBtnOn(false);
  };

  // validation check (email & password format)
  const canRegister = (userInfo) => {
    if (!userInfo.email || !userInfo.password) return false;
    const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regEmail.test(userInfo.email) === true && userInfo.password.length >= 8) {
      return true;
    }
    return false;
  };

  // register button click!
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    signUp(userInfo);
  };

  return (
    <div className={`card border-0 shadow card--register ${isShow === "register" ? "is-show" : ""} `} id="register">
      <div className="card-body">
        <h2 className="card-title">Create Account</h2>
        <p className="card-text">
          Enter your personal details
          <br />
          use your email for registration
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input className="form-control" onChange={onChange} type="email" placeholder="Email" required="required" />
          </div>
          <div className="form-group">
            <input className="form-control" onChange={onChange} type="password" placeholder="Password" required="required" />
          </div>
          <button type="submit" disabled={!btnOn} className={`btn btn-lg ${btnOn ? "btn-on" : "btn-off"}`} id="register">
            REGISTER
          </button>
        </form>
      </div>
      <button className="btn btn-back js-btn fas fa-angle-left" onClick={(e) => handleClick(e)} data-target="welcome"></button>
    </div>
  );
};

export default Register;
