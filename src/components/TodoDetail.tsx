import { useLocation, useNavigate } from 'react-router-dom';
import './Todo.css';

const TodoDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data: any = location.state;
  const todoItem = () => {
    console.log(location);
    return <div className={`task-item`}>{location.state ? detailItem(location.state) : '정보 없음'}</div>;
  };

  // edit page로 넘어가는 부분 구현
  const editPage = () => {
    navigate(`/todo/edit/${data.index}`, { state: location.state });
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
