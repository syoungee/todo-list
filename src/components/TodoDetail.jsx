import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTodoById } from "../api";
import "./Todo.css";

const TodoDetail = (props) => {
  const location = useLocation();
  const [item, setItem] = useState(null);
  useEffect(() => {
    getTodoById(location.state.id).then((res) => {
      if (res.status === 200) {
        setItem(res.data.data);
      } else console.log(res.status, res.data.message);
    });
  }, []);

  const todoItem = () => {
    return <div className={`task-item`}>{item ? detailItem(item) : ""}</div>;
  };

  const detailItem = (data) => {
    return (
      <div>
        <div>title [{data?.title}]</div>
        <div>content {data?.content}</div>
        <div>createdAt {data?.createdAt}</div>
      </div>
    );
  };

  return (
    <div className="app">
      <div className="task-header">
        <div className="task-header-title">TODO{` #${location.state.index + 1}`}</div>
        <div className="task-tools"></div>
      </div>
      {todoItem()}
    </div>
  );
};

export default TodoDetail;
