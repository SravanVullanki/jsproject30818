// import logo from './logo.svg';
import './App.css';
import MainNavBar from './main/MainNavBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>PAWS AND PALACE</h1>
      <Router>
        <MainNavBar />
      </Router>
    </div>
  );
}

export default App;
