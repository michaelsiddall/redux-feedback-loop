import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Route, HashRouter as Router, Link } from "react-router-dom";
import { connect } from "react-redux";

import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comment from "../Comment/Comment";
import Review from "../Review/Review";
import Confirmation from "../Confirmation/Confirmation";

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
            <Route path="/" exact>
              <Feeling />
            </Route>
            <Route path="/understanding" exact>
              <Understanding />
            </Route>
            <Route path="/support" exact>
              <Support />
            </Route>
            <Route path="/comment" exact>
              <Comment />
            </Route>
            <Route path="/review" exact>
              <Review />
            </Route>
            <Route path="/confirm" exact>
              <Confirmation />
            </Route>
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore,
});

export default connect(mapStateToProps)(App);
