import React from 'react';
import './App.css';
import { MoviesTable } from './components/MoviesTable';

function App() {
  return (
    <div className="App">
      <h2>Movies</h2>
      <div>
        <MoviesTable/>
      </div>
    </div>
  );
}

export default App;
