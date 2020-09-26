import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Route, HashRouter as Router, Link } from "react-router-dom";

import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <br />
          <main>
            <Route path="/">
              <Feeling />
            </Route>
            <Route path="/understanding">
              <Understanding />
            </Route>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
