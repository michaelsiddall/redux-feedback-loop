import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Feeling from "../Feeling/Feeling";
import { connect } from "react-redux";

class Understanding extends Component {
  onNext = () => {
    console.log("in onNext");
    console.log("this.props.history", this.props.history);
    this.props.history.push("/support");
  };
  onChangeUnderstanding = (event) => {
    console.log("payload is", event.target.value);
    this.props.dispatch({
      type: "SET_UNDERSTANDING",
      payload: event.target.value,
    });
  };
  render() {
    return (
      <section>
        <h1>How well are you understanding the content?</h1>
        <br />
        <h5>Understanding?</h5>

        <input
          required
          type="number"
          placeholder="1-5, 1 = terrible 5 = great"
          min="1"
          max="5"
          onChange={this.onChangeUnderstanding}
        ></input>
        <button onClick={this.onNext}>Next</button>
      </section>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
  reduxStore,
});
export default connect(mapStateToProps)(withRouter(Understanding));
