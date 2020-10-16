import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Home from './components/Home.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          movie: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {
    return (<div>
      <Home />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));