import React from 'react';
import ReactDOM from 'react-dom';
import GameElements from '../game_logic.js';
import Tile from '../game_logic.js';
import Board from './board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {board: new GameElements.Board(20, 40)};
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, bool){
    if (bool) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState({board: this.state.board});

    this.detectGameOver();
  }

  detectGameOver(){
    if(this.state.board.lost()){
      alert("You lose!");
      this.setState({board: new GameElements.Board(20, 30)});
    } else if (this.state.board.won()){
      alert("You win!");
      this.setState({board: new GameElements.Board(20, 30)});
    }
  }

  render() {
    return (
      <Board board={this.state.board} updateGame={this.updateGame} />
    );
  }
}

export default Game;
