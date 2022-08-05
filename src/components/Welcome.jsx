import React, { useRef, useState, useEffect } from "react";
import "./Welcome.css";

const Welcome = () => {
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
    <div className="card border-0 shadow card--welcome is-show" id="welcome">
      <div className="card-body">
        <h2 className="card-title">WELCOME</h2>
        <p>Welcome to the login page</p>
        <div className="btn-wrap">
          <button className="btn btn-lg btn-register js-btn" data-target="register">
            REGISTER
          </button>
          <button className="btn btn-lg btn-login js-btn" data-target="login">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
