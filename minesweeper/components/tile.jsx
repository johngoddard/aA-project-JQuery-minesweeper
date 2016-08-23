import React from 'react';
import ReactDOM from 'react-dom';

class TileComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.addColorClass = this.addColorClass.bind(this);
  }

  render() {
    let classes = this.getClassName();
    return (
      <div onClick={this.handleClick} className={classes}><span>{this.statusToString()}</span></div>
    );
  }


  handleClick(event) {
    if(event.altKey){
      this.props.updateGame(this.props.tile, true);
    }else{
      this.props.updateGame(this.props.tile, false);
    }
  }



  getClassName(){
    let classes = ["tile"];
    if(this.props.tile.flagged){
      classes.push("flagged");
    } else if (this.props.tile.explored && this.props.tile.bombed) {
        classes.push("bombed");
    } else if(this.props.tile.explored){
      classes.push("explored");
        if (this.props.tile.adjacentBombCount() > 0) {
            classes.push(this.addColorClass(this.props.tile.adjacentBombCount()));
        }
    }
    return classes.join(" ");
  }


  addColorClass(int) {
    switch (int) {
      case 1:
        return ("blue");
      case 2:
        return ("green");
      case 3:
        return ("red");
      case 4:
        return ("dark-blue");
      case 5:
        return ("maroon");
      case 6:
        return ("teal");
      default: return("black");

    }
  }



  statusToString(){
    if(this.props.tile.flagged){
      return "⚑";
    } else if (this.props.tile.explored && this.props.tile.bombed){
      return "💣";
    } else if (this.props.tile.explored && this.props.tile.adjacentBombCount() > 0){
      return this.props.tile.adjacentBombCount();
    } else{
      return " ";
    }
  }
}

export default TileComp;
