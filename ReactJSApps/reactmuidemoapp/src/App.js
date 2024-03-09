// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h2 align='center'>React Material UI Demo </h2>
      <hr></hr>
      <Router>
      <NavBar/>
      </Router>
    </div>
  );
}

export default App;
