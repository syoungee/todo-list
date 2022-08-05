import React from "react";
import "./Welcome.css";

const Register = () => {
  const cards = document.querySelectorAll(".card");

  const btns = document.querySelectorAll(".js-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", on_btn_click, true);
    btn.addEventListener("touch", on_btn_click, true);
  });

  function on_btn_click(e) {
    //console.log(e.currentTarget);
    const nextID = e.currentTarget.getAttribute("data-target");
    const next = document.getElementById(nextID);
    if (!next) return;
    bg_change(nextID);
    view_change(next);
    return false;
  }

  /* Add class to the body */
  function bg_change(next) {
    //alert(document.body.classList);
    document.body.className = "";
    document.body.classList.add("is-" + next);
  }

  /* Add class to a card */
  function view_change(next) {
    cards.forEach((card) => {
      card.classList.remove("is-show");
    });
    next.classList.add("is-show");
  }
  return (
    <div className="card border-0 shadow card--register" id="register">
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
      <button className="btn btn-back js-btn fas fa-angle-left" data-target="welcome"></button>
    </div>
  );
};

export default Register;
