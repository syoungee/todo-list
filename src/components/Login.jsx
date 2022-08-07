import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api.js";
import "./Welcome.css";

const Login = (props) => {
  const navigate = useNavigate();
  const { isShow, handleClick } = props;
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [btnOn, setBtnOn] = useState(false);

  // set email & password
  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.type]: e.target.value });
    if (canRegister(userInfo)) setBtnOn(true);
    else setBtnOn(false);
  };

  // validation check
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
    login(userInfo).then((res) => {
      console.log(res.status, res.data.message);
      if (res.status === 200) {
        window.localStorage.setItem("isLoggedIn", true);
        window.localStorage.setItem("token", res.data.token);
        navigate("/todo");
      } else {
        console.log(res.status, res.data.message);
      }
    });
  };

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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input className="form-control" onChange={onChange} type="email" placeholder="Email" required="required" />
          </div>
          <div className="form-group">
            <input className="form-control" onChange={onChange} type="password" placeholder="Password" required="required" />
          </div>
          <button type="submit" disabled={!btnOn} className={`btn btn-lg ${btnOn ? "btn-on" : "btn-off"}`} id="login">
            LOGIN
          </button>
        </form>
      </div>
      <button className="btn btn-back js-btn fas fa-angle-left" onClick={(e) => handleClick(e)} data-target="welcome"></button>
    </div>
  );
};

export default Login;
