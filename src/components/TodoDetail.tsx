import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getTodoById } from '../api';
import './Todo.css';

interface Item {
  id: number;
  title: 'string';
  content: 'string';
}

const TodoDetail = (props: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const data: any = location.state;
  const id = data.id;
  const [item, setItem] = useState<Array<Item> | null>(null);

  getTodoById(id).then((res) => {
    if (res?.status === 200) {
      setItem(res.data.data);
    } else console.log(res?.status, res?.data.message);
  });

  const todoItem = () => {
    return <div className={`task-item`}>{item ? detailItem(item) : ''}</div>;
  };

  // edit page로 넘어가는 부분 구현
  const editPage = () => {
    console.log(data.index, props);
    navigate(`/todo/edit/${data.index}`, { state: { id: data.id, index: data.index, item: item } });
    return;
  };

  const detailItem = (itemData: any) => {
    return (
      <div>
        <div>title [{itemData?.title}]</div>
        <div>content {itemData?.content}</div>
        <div>createdAt {itemData?.createdAt}</div>
      </div>
    );
  };

  return (
    <div className="app">
      <div className="task-header">
        <div className="task-header-title">
          TODO{` #${data.index + 1}`}{' '}
          <button className="task-filter" onClick={() => editPage()}>
            click to edit!<div className="task-edit"></div>
          </button>
        </div>
      </div>
      {todoItem()}
    </div>
  );
};

export default TodoDetail;
