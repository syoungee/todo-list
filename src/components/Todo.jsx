import React, { useEffect, useState } from "react";
import "./Todo.css";
// import todoDatas from "../dummy-data.json";
import { getTodos } from "../api";

const Todo = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    getTodos().then((res) => {
      if (res.status === 200) {
        setItems(res.data.data);
      } else console.log(res.status, res.data.message);
    });
  }, []);

  const checkValue = (e) => {
    const parentName = e.target.parentElement.className;
    const targetName = e.target.className;
    if (!targetName.includes("checked")) e.target.className = "task-status";
    else e.target.className = "task-status checked";
    if (parentName.includes("is-completed")) e.target.parentElement.className = "task-item";
    else e.target.parentElement.className = `task-item is-completed`;
  };

  const todoItems = () => {
    return items?.map((item, index) => (
      <div className={`task-item`} key={index}>
        <input className={`task-status`} type="checkbox" value={index} onChange={(e) => checkValue(e)}></input>
        <div className={`task-name`}>{item.title}</div>
        <button className="task-detail"></button>
        <button className="task-delete"></button>
      </div>
    ));
  };

  return (
    <div className="app">
      <div className="task-header">
        <div className="task-header-title">TODO LIST</div>
        <div className="task-tools"></div>
      </div>
      <div className="task-tools">{items?.length} tasks</div>
      <div className="task-list">{todoItems()}</div>
    </div>
  );
};

export default Todo;
