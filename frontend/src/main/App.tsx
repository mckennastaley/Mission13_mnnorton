import React from 'react';
import './App.css';
import TopBanner from '../Blah';
import MovieList from '../movies';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#78909c' }}>
      <TopBanner saying="Welcome" />
      <MovieList />
    </div>
  );
}

export default App;
