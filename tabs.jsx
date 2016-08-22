import React from 'react';
import ReactDOM from 'react-dom';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: this.props.tabsArray[0]};

  }

  changeTab(tab) {
    this.setState({selectedTab: tab});
  }

  render() {
    const tabTitles = this.props.tabsArray.map( (tab) => {
      return(<h4 key={tab.Title} onClick={this.changeTab.bind(this, tab)}>{tab.Title}</h4>);
    });

    return(
     <div>
       <ul>
         {tabTitles}
       </ul>

       <article>
         {this.state.selectedTab.Content}
       </article>
     </div>
   );

  }
}

export default Tabs;
