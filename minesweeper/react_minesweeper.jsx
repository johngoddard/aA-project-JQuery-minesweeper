import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(
    <div>
      <h1>Minesweeper</h1>
      <p>Click to explore a tile.</p>
      <p>Alt + click to flag a tile.</p>
      <Game />
    </div> , root);
});
