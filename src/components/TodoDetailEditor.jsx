import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updateTodo } from "../api";
import "./Todo.css";

const TodoDetailEditor = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [todoInfo, setTodoInfo] = useState({ title: location.state.item.title, content: location.state.item.content });
  const data = location.state;
  const id = location.state.id;

  const onChange = (e) => {
    setTodoInfo({ ...todoInfo, [e.target.name]: e.target.value });
  };

  // TODO: status 200일 경우 useEffect로 업데이트 해주기
  const editTodo = (e) => {
    e.preventDefault();
    console.log("todoInfo :", todoInfo, id);
    console.log({ ...todoInfo, id: id });
    const data = { ...todoInfo, id: id };
    updateTodo(data).then((res) => {
      if (res.status === 200) {
        console.log("updated successed!");
        navigate(`/todo/${location.state.index}`, { state: { id: location.state.id, index: location.state.index } });
      } else {
        console.log(res.status, res.message);
        alert(res.message);
      }
    });
  };

  const detailItem = (data) => {
    return (
      <div>
        <form action="submit">
          title:
          <input type="text" name="title" defaultValue={data?.item?.title ? data.item.title : null} onChange={onChange} required="required" />
          <br />
          content:
          <input type="text" name="content" defaultValue={data?.item?.content ? data.item.content : null} onChange={onChange} required="required" />
          <br />
          createdAt: {data?.item?.createdAt}
          <br /> <br />
          <button type="submit" onClick={(e) => editTodo(e)}>
            수정하기
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="app">
      <div className="task-header">
        <div className="task-header-title">TODO{` #${data.index + 1}`}</div>
        {detailItem(data)}
      </div>
    </div>
  );
};

export default TodoDetailEditor;
