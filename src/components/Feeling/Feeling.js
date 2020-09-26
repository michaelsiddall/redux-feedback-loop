import React, { Component } from "react";
import axios from "axios";

class Feeling extends Component {
  render() {
    return (
      <section>
        <h1>How are you feeling today?</h1>
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

export default Feeling;
