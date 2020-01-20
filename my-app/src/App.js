import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Characters from './Pages/Characters';
import Navigation from './Components/Navigation';
import Foot from './Components/Foot';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="wrapper">
        <Navigation />
          <Route exact path='/' component={Home} />
          <Route exact path="/Characters" component={Characters} />
          {/* <Foot /> */}
          </div>
      </HashRouter>
    );
  }
}

export default App;
