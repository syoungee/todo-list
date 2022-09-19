import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/pages/Main';
import Todo from './components/pages/Todo';
import TodoDetail from './components/pages/TodoDetail';
import TodoDetailEditor from './components/pages/TodoDetailEditor';
import TodoAddPage from './components/pages/TodoAddPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/auth" />} />
        <Route path="/auth" element={<Main />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo/add" element={<TodoAddPage />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
        <Route path="/todo/edit/:id" element={<TodoDetailEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
