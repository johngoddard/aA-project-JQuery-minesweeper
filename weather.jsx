import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {currentWeather: null, weatherDescription: null};
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    let widget = this;

    navigator.geolocation.getCurrentPosition(this.getWeather);
  }

  getWeather(pos){
    let widget = this;
    let coords = pos.coords;
    const xhr = new XMLHttpRequest();
    console.log(coords);
    xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${coords.latitdude}&lon=${coords.longitude}&units=imperial&APPID=1be1275c3c19dc59d1da9161969f5309`);

    xhr.onload = function() {
      let info = JSON.parse(xhr.response);
      widget.setState({currentWeather: info.main.temp,
                      weatherDescription: info.weather[0].description});
    };

    xhr.send();
  }

  render(){
    return (
      <div>The temperature in San Francisco is:
        <article>{this.state.currentWeather}</article>
        <article>{this.state.weatherDescription}</article>
      </div>
    );
  }
}

export default Weather;
