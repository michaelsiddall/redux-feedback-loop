import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Feeling from "../Feeling/Feeling";

class Understanding extends Component {
  state = {
    feeling: null,
    understanding: null,
  };

  onNext = () => {
    console.log("in onNext");
    console.log("this.props.history", this.props.history);
    this.props.history.push("/support");
  };
  render() {
    return (
      <section>
        <h1>How well are you understanding the content?</h1>
        <br />
        <h5>Understanding?</h5>

        <input
          type="number"
          placeholder="1-5, 1 = terrible 5 = great"
          min="1"
          max="5"
        ></input>
        <button onClick={this.onNext}>Next</button>
      </section>
    );
  }
}

export default withRouter(Understanding);
