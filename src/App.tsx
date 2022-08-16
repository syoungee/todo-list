import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Todo from "./components/Todo";
import TodoDetail from "./components/TodoDetail";
import TodoDetailEditor from "./components/TodoDetailEditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/auth" />} />
        <Route path="/auth" element={<Main />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo/:id" element={<TodoDetail/>} />
        <Route path="/todo/edit/:id" element={<TodoDetailEditor/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
