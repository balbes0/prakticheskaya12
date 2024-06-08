// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import Movies from './components/Movies.js';
import './App.css';

const API_KEY = "b7d23378-6c95-4f43-910c-7237eab4f690";
const TOP20MOVIES = "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES";
const TOP20SERIES = "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_TV_SHOWS";
const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTop20Movies(TOP20MOVIES);
  }, []);

  async function getMovies(url) {
    const resp = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      },
    });
    const respData = await resp.json();
    setMovies(respData.films);
  }

  async function getTop20Movies(url) {
    const resp = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      },
    });
    const respData = await resp.json();
    setMovies(respData.items);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const apiSearchUrl = `${API_URL_SEARCH}${e.target.elements[0].value}`;
    if (e.target.elements[0].value) {
      getMovies(apiSearchUrl);
    }
    e.target.elements[0].value = '';
  };

  return (
    <div className="App">
      <Header 
        onTopMoviesClick={() => getTop20Movies(TOP20MOVIES)} 
        onTopSeriesClick={() => getTop20Movies(TOP20SERIES)}
        onSearchSubmit={handleSearchSubmit}
      />
      <Movies movies={movies} />
    </div>
  );
}

export default App;
