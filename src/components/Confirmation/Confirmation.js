import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Confirmation extends Component {
  //   onChangeConfirmation = (event) => {
  //     console.log("payload is", event.target.value);
  //     this.props.dispatch({
  //       type: "SET_SUPPORT",
  //       payload: event.target.value,
  //     });
  //   };

  render() {
    return (
      <section>
        <h1>Thank you for your feedback!</h1>
        <button onClick={this.onNext}>Leave New Feedback</button>
      </section>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore,
});
export default withRouter(Confirmation);
