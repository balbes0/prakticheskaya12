// Movies.js
import React from 'react';
import Movie from '../components/Movie.js'; // импортируем компонент Movie
import '../styles/Movies.css'; // импортируем стили

function Movies({ movies }) {
  return (
    <div className="container">
      <div className="movies">
        {movies.map((movie, index) => (
          <Movie
            key={index}
            name={movie.nameRu}
            posterUrl={movie.posterUrlPreview}
            genres={movie.genres.map(genre => genre.genre)}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;
