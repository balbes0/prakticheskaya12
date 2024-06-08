// Movie.js
import React from 'react';
import '../styles/Movie.css'; // импортируем стили

function Movie({ name, posterUrl, genres }) {
  return (
    <div className="movie">
      <div className="movie__cover-inner">
        <img src={posterUrl} className="movie__cover" alt={name} />
        <div className="movie__cover--darkened"></div>
      </div>
      <div className="movie__info">
        <div className="movie__title">{name}</div>
        <div className="movie__category">{genres.join(', ')}</div>
      </div>
    </div>
  );
}

export default Movie;
