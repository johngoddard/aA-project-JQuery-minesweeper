import React from 'react';
import ReactDOM from 'react-dom';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ""};
    this.getNameList = this.getNameList.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
  }


  handleTyping(e) {
    // debugger
    // e.preventDefault();
    let searchTerm = e.target.value;
    this.setState({searchTerm});
  }


  handleClick(name){
    this.setState({searchTerm: name});
  }

  getNameList(){
    const searchLength = this.state.searchTerm.length;
    let res = [];
    let widget = this;
    this.props.names.forEach(name =>{
      if(name.slice(0, searchLength).toLowerCase() === this.state.searchTerm.toLowerCase()){
        res.push(<li key={name}
                     onClick={widget.handleClick.bind(widget, name)}>
                     {name}
                 </li>);
      }
    });

    return res;
  }

  render(){
    return(
      <div>
        <input onChange={this.handleTyping} value={this.state.searchTerm}></input>
        <ul>
          {this.getNameList()}
        </ul>
      </div>
    );
  }
}

export default Autocomplete;
