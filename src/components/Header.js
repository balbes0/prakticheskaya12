// Header.js
import React from 'react';
import '../styles/Header.css'; // импортируем стили

function Header({ onTopMoviesClick, onTopSeriesClick, onSearchSubmit }) {
  return (
    <header className="container header">
      <div className="header__content">
        <h1 className="header__title">ТИПО КИНОПОИСК</h1>
        <button className="header__button" onClick={onTopMoviesClick}>ТОП 20 ФИЛЬМОВ</button>
        <button className="header__button" onClick={onTopSeriesClick}>ТОП 20 СЕРИАЛОВ</button>
        <form onSubmit={onSearchSubmit}>
          <input type="text" className="header__search" placeholder="Поиск" />
          <button type="submit" className="header__search-btn">Найти</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
