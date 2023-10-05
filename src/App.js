import { Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
   <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
   </Router>
}

export default App;
