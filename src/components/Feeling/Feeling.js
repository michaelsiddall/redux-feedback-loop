import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Feeling extends Component {
  onNext = () => {
    console.log("in onNext");
    console.log("this.props.history", this.props.history);
    if (this.props.reduxStore.feedbackCategory.feeling === "") {
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
    console.log("state", this.props.reduxState);

    return (
      <section>
        <h1>How are you feeling today?</h1>

        <br />
        <h5>Feeling?</h5>
        <input
          required
          id="inputBox"
          type="number"
          placeholder="1 = terrible 5 = great"
          min="1"
          max="5"
          onChange={this.onChangeFeeling}
        ></input>
        <button id="nextFeelingBtn" onClick={this.onNext}>
          Next
        </button>
      </section>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
  reduxStore,
});
export default connect(mapStateToProps)(withRouter(Feeling));
