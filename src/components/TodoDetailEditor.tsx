import { useState, ChangeEvent, MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateTodo } from '../api/api';
import './Todo.css';

const TodoDetailEditor = (props: any) => {
  const location: any = useLocation();
  const navigate = useNavigate();
  const [todoInfo, setTodoInfo] = useState({ title: location.state.title, content: location.state.content });
  const data: any = location.state;
  const id = data.id;

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodoInfo({ ...todoInfo, [e.target.name]: e.target.value });
  };

  const editTodo = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const allToDoData = { ...todoInfo, id: id };
    updateTodo(allToDoData).then(() => {
      console.log('updated successed!');
      navigate(`/todo/${data.index}`, { state: { id: data.id, ...todoInfo } });
    });
  };

  const detailItem = (data: any) => {
    return (
      <div>
        <form action="submit">
          title:
          <input type="text" name="title" defaultValue={data?.title ? data.title : null} onChange={onChange} required={true} />
          <br />
          content:
          <input type="text" name="content" defaultValue={data?.content ? data.content : null} onChange={onChange} required={true} />
          <br />
          createdAt: {data?.createdAt}
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
