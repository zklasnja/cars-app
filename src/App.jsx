import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Router from './Router';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/cars'>Cars</Link>
            </li>
            <li>
              <Link to='/add'>Add Car</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Router />
    </div>
  );
}

export default App;
