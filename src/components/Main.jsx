import React, { useState } from "react";
import Welcome from "./Welcome";
import Login from "./Login";
import Register from "./Register";
import "./Welcome.css";

const Main = () => {
  const [isShow, setIsShow] = useState("welcome");

  const handleClick = (e) => {
    console.log(isShow);
    setIsShow(e.currentTarget.getAttribute("data-target"));
    console.log(isShow);
    if (!isShow) return;
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.classList.remove("is-show");
    });
    document.body.className = "";
  };

  return (
    <div className="card-wrap">
      <Welcome isShow={isShow} setIsShow={setIsShow} handleClick={handleClick} />
      <Register isShow={isShow} setIsShow={setIsShow} handleClick={handleClick} />
      <Login isShow={isShow} setIsShow={setIsShow} handleClick={handleClick} />
    </div>
  );
};

export default Main;
