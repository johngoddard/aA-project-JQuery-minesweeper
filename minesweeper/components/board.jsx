import React from 'react';
import ReactDOM from 'react-dom';
import TileComp from './tile';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }


  render() {
    let rendered = this.renderBoard();

    return (
      <div>
        {rendered}
      </div>
    );
  }

  renderBoard() {
    const mappedRows = this.props.board.grid.map( (row,index) =>{
      return <div key={`row-${index}`} className='row'>{this.renderRow(row,index)}</div>;
    });
    return mappedRows;
  }

  renderRow(row, index) {

    const mappedTiles = row.map( (tile, index2) => {
      return <TileComp key={`tile-${tile.pos}`} tile={tile} updateGame={this.props.updateGame}/>
    });
    // debugger
    return mappedTiles;
  }
}

export default Board;
