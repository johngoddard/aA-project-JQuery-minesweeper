import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs.jsx';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Widgets />, root);
});

class Widgets extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <section>
        <Tabs tabsArray={[{"Title": 'tab1', "Content": 'content for tab 1'},
                          {"Title": "tab2", "Content": 'more stuff from tab 2'}]}/>
      <Clock />
      <Weather />
      <Autocomplete names={["Breakfast", "Curie", "Markov", "Clyde"]} />
      </section>
    );
  }
}
