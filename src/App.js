import React from 'react';
import './styles.css';
import SearchMovies from './components/SearchMovies';


export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <SearchMovies />
      </header>
    </div>
  );
}

