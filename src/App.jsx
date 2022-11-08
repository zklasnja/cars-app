import logo from './logo.svg';
import './App.css';
import { Link } from 'react';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to='/cars'>Cars</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Router />
    </div>
  );
}

export default App;
