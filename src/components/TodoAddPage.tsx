import { useState, ChangeEvent, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTodo } from '../api';
import './Todo.css';

const TodoAddPage = () => {
  const [todoInfo, setTodoInfo] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodoInfo({ ...todoInfo, [e.target.name]: e.target.value });
  };

  const addTodo = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(todoInfo);
    createTodo(todoInfo).then(() => {
      console.log('add todo successed!');
      navigate(`/todo`);
    });
  };

  return (
    <div className="app">
      <div className="task-header">
        <div className="task-header-title">ADD TODO</div>
        <div>
          <form action="submit">
            title:
            <input type="text" name="title" onChange={onChange} required={true} />
            <br />
            content:
            <input type="text" name="content" onChange={onChange} required={true} />
            <br /> <br />
            <button type="submit" onClick={(e) => addTodo(e)}>
              생성하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoAddPage;
