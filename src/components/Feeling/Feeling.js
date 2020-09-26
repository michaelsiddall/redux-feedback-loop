import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Feeling extends Component {
  state = {
    feeling: null,
  };

  onNext = () => {
    console.log("in onNext");
    console.log("this.props.history", this.props.history);
    if (isNaN("numberSelect") || "numberSelect" < 1 || "numberSelect" > 5) {
      alert("Please select a number 1-5");
    } else {
      this.props.history.push("/understanding");
    }
  };
  render() {
    return (
      <section>
        <h1>How are you feeling today?</h1>
        <br />
        <h5>Feeling?</h5>
        <input
          id="numberSelect"
          type="number"
          placeholder="1-5, 1 = terrible 5 = great"
          min="1"
          max="5"
          required
        ></input>
        <button onClick={this.onNext}>Next</button>
      </section>
    );
  }
}

export default withRouter(Feeling);
