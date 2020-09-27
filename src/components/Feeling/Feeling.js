import React, { Component } from "react";
// import axios from "axios";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

class Feeling extends Component {
  onNext = () => {
    console.log("in onNext");
    console.log("this.props.history", this.props.history);
    let numberSelect = "numberSelect";
    if (numberSelect === "") {
      alert("Please select a number 1-5");
    } else {
      this.props.history.push("/understanding");
    }
  };

  onChangeFeeling = (event) => {
    console.log("payload is", event.target.value);
    this.props.dispatch({
      type: "SET_FEELING",
      payload: event.target.value,
    });
  };
  render() {
    return (
      <section>
        <h1>How are you feeling today?</h1>
        <form>
          <br />
          <h5>Feeling?</h5>
          <input
            required
            id="numberSelect"
            type="number"
            placeholder="1-5, 1 = terrible 5 = great"
            min="1"
            max="5"
            onChange={this.onChangeFeeling}
          ></input>
          <button onClick={this.onNext}>Next</button>
        </form>
      </section>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
  reduxStore,
});
export default connect(mapStateToProps)(withRouter(Feeling));
