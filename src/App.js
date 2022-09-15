import style from "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/index";
import { Taskbar } from "./components/taskBar/index";

function App() {
  return (
    <div className="App">
      <div className="body">
        <Navbar />
        <Taskbar />
      </div>
    </div>
  );
}

export default App;
