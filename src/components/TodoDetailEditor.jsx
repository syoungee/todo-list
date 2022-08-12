import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { getTodoById } from "../api";
import "./Todo.css";

const TodoDetailEditor = (props) => {
  const location = useLocation();
  const [item, setItem] = useState(props.item);
  const data = location.state;
  const id = location.state.id;

  const detailItem = (data) => {
    return (
      <div>
        <form action="submit">
          title:
          <input type="text" name="title" value={data?.item?.title} />
          <br />
          name:
          <input type="text" name="name" value={data?.item?.content} />
          <br />
          createdAt:
          <input type="text" name="createdAt" value={data?.item?.createdAt} disabled />
          <br /> <br />
          <input type="submit" value="수정하기" />
        </form>
      </div>
    );
  };

  return (
    <div className="app">
      <div className="task-header">
        {console.log("props", data)}
        <div className="task-header-title">TODO{` #${data.index + 1}`}</div>
        {detailItem(data)}
      </div>
    </div>
  );
};

export default TodoDetailEditor;
