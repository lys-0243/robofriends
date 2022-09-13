import Robots from "./components/Robots";
import Title from "./components/Title";
import "./styles/App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="app_head">
        <Title />
      </div>

      <Robots />
    </div>
  );
}

export default App;
