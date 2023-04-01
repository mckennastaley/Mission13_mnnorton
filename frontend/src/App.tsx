import React from 'react';
import './App.css';
import TopBanner from './Blah';
import MovieList from './movies';

function App() {
  return (
    <div className="App">
      <TopBanner saying="Joel's Movies- Home" />
      <MovieList />
    </div>
  );
}

export default App;
