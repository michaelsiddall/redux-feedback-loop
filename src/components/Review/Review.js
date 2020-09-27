import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Review extends Component {
  onSubmit = () => {
    console.log("in onSubmit");
    axios({
      method: "POST",
      url: "/feedback",
      data: this.props.feedbackCategory,
    })
      .then((response) => {
        console.log("back from POST with:", response);
      })
      .catch((err) => {
        console.log(err);
        alert("problem...");
      });
  }; //end function

  render() {
    return (
      <section>
        <h1>Review Your Feedback</h1>
        <br />
        <h3>Feelings: {this.reduxStore} </h3>

        <h3>Understanding: </h3>

        <h3>Support: </h3>

        <h3>Comments: </h3>

        <button onClick={this.onSubmit}>Submit</button>
      </section>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore,
});

export default connect(mapStateToProps)(withRouter(Review));
