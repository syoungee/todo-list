import Welcome from "./components/Welcome";
import Register from "./components/Register";
import Login from "./components/Login";
import "./components/Welcome.css";

function App() {
  return (
    <div className="card-wrap">
      <Welcome />
      <Register />
      <Login />
    </div>
  );
}

export default App;
