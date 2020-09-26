import React, { Component } from "react";
import axios from "axios";

class Understanding extends Component {
  state = {
    feeling: null,
    understanding: null,
  };
  render() {
    return (
      <section>
        <h1>How well are you understanding the content?</h1>
        <br />
        <h5>Feeling?</h5>
        <input
          type="number"
          placeholder="1-5, 1 = terrible 5 = great"
          min="1"
          max="5"
        ></input>
        <button>Next</button>
      </section>
    );
  }
}

export default Understanding;
