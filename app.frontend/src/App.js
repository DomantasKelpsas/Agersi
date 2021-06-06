import React from 'react';
import './App.css';
import { NewMovieModal } from './components/MovieModal';
import { MoviesTable } from './components/MoviesTable';

function App() {
  return (
    <div className="App">
      <h1 className="p-4 m-4">Movies List</h1>
      <div>
        <div className="pl-5 my-1 float-left">
          <NewMovieModal/>
        </div>
        <MoviesTable/>
      </div>
    </div>
  );
}

export default App;
