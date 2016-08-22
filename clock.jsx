import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {time: new Date()};
    this.timerID = null;

  }

  componentDidMount(){
    this.timerID = setInterval(() => this.setState({time: new Date()}), 1000 );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <article>Time: {this.state.time.toTimeString().slice(0, 12)}</article>
        <article>Date: {this.state.time.toDateString()}</article>
      </div>
    );
  }
}

export default Clock;
