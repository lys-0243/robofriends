import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Robot from "./components/RobotDetails";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/robot/" element={<Robot/>} >
          <Route path=":idRobot" element={<Robot />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
