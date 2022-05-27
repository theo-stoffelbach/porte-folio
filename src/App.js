import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Window from "./Components/Window";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/window/:page" element={<Window />} />
      </Routes>
    </div>
  );
}

export default App;
