import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Confirmation extends Component {
  onLeaveNew = (event) => {
    console.log("payload is", event.target.value);

    this.props.history.push("/");
  };

  render() {
    return (
      <section>
        <h1>Thank you for your feedback!</h1>
        <button id="newFeedbackBtn" onClick={this.onLeaveNew}>
          Leave New Feedback
        </button>
      </section>
    );
  }
}

// const mapStateToProps = (reduxStore) => ({
//   reduxStore,
// });
export default withRouter(Confirmation);
