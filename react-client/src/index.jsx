import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import Home from './components/Home.jsx';
import signin from './components/signin.jsx';
import signup from './components/signup.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (

      <BrowserRouter>
        <div>
          <Route path="/" exact component={signup} />
          <Route path="/signin" exact component={signin} />
          <Route path="/dashboard" exact component={Home} />

        </div>

      </BrowserRouter>


    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));