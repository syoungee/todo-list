import { AxiosResponse } from 'axios';
import { useEffect, useState, MouseEvent } from 'react';
import { getTodos, deleteTodo } from '../api';
import { useNavigate } from 'react-router-dom';
import './Todo.css';

interface Item {
  id: number;
  title: 'string';
  content: 'string';
}

const Todo = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<Array<Item> | null>(null);
  useEffect(() => {
    getTodos().then((res: AxiosResponse<any, any> | undefined): void => {
      if (res?.status === 200) {
        setItems(res?.data?.data);
      } else console.log(res?.status, res?.data?.message);
    });
  }, []);

  const checkValue = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLTextAreaElement;
    const targetName = target.className;
    let parentName = target.parentElement?.className;
    if (!targetName.includes('checked')) target.className = 'task-status';
    else target.className = 'task-status checked';
    if (parentName?.includes('is-completed')) parentName = 'task-item';
    else parentName = `task-item is-completed`;
  };

  // X 버튼 클릭 시 삭제 로직
  // TODO: 삭제 성공 뒤 페이지 refresh
  const deleteItem = (id: string | number) => {
    deleteTodo(id).then((res: any) => {
      if (res.status === 200) {
        console.log('todo 삭제 성공');
      } else {
        console.log(res.status, res.data.message);
        console.log('todo 삭제 실패!');
      }
    });
  };

  const todoItems = () => {
    return items?.map((item, index) => (
      <div className={`task-item`} key={index}>
        <input className={`task-status`} type="checkbox" value={index} onClick={(e: MouseEvent<HTMLElement>) => checkValue(e)}></input>
        <div className={`task-name`}>{item.title}</div>
        <button
          className="task-detail"
          onClick={() => {
            navigate(`/todo/${index}`, { state: { id: item.id, index: index } });
          }}
        ></button>
        <button
          className="task-delete"
          onClick={() => {
            console.log('onclick!', item.id);
            deleteItem(item.id);
          }}
        ></button>
      </div>
    ));
  };

  return (
    <div className="app">
      <div className="task-header">
        <div className="task-header-title">TODO LIST</div>
        <div className="task-tools"></div>
      </div>
      <div className="task-body">
        <div className="task-tools">{items?.length} tasks</div>
        <div className="task-filter is-active">add new tasks!</div>
      </div>
      <div className="task-list">{todoItems()}</div>
    </div>
  );
};

export default Todo;
