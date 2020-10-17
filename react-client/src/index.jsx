import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Home from './components/Home.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: []
    }
  }



  render() {
    return (<div>
      <Home />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));