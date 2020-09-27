import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Support extends Component {
  onNext = () => {
    console.log("in onNext");
    if (this.props.reduxStore.feedbackCategory.support === "") {
      alert("Please select a number 1-5");
    } else {
      this.props.history.push("/comment");
    }
  };
  onChangeSupport = (event) => {
    console.log("payload is", event.target.value);
    this.props.dispatch({
      type: "SET_SUPPORT",
      payload: event.target.value,
    });
  };

  render() {
    return (
      <section>
        <h1>How well are you being supported?</h1>
        <br />
        <h5>Support?</h5>

        <input
          id="inputBox"
          type="number"
          placeholder="1 = terrible 5 = great"
          min="1"
          max="5"
          onChange={this.onChangeSupport}
        ></input>
        <button id="nextSupportBtn" onClick={this.onNext}>
          Next
        </button>
      </section>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore,
});
export default connect(mapStateToProps)(withRouter(Support));
