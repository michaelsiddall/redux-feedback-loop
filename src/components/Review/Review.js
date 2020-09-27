import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Review extends Component {
  onNext = () => {
    console.log("in onNext");
    console.log("this.props.history", this.props.history);
    this.props.history.push("/confirm");
  };

  onSubmit = () => {
    console.log("in onSubmit");
    axios({
      method: "POST",
      url: "/feedback",
      data: this.props.reduxStore,
    })
      .then((response) => {
        console.log("back from POST with:", response);
        this.onNext();
      })
      .catch((err) => {
        console.log(err);
        alert("problem...");
      });
  }; //end function

  render() {
    console.log("redux state", this.props.reduxStore);
    console.log("this is comment displayed", this.props.reduxStore.commment);

    return (
      <section>
        <h1>Review Your Feedback</h1>
        <br />
        <h2>Feelings:</h2>
        <h3>{this.props.reduxStore.feeling}</h3>
        <h2>Understanding:</h2>
        <h3>{this.props.reduxStore.understanding} </h3>
        <h2>Support:</h2>
        <h3>{this.props.reduxStore.support}</h3>
        <h2>Comment:</h2>
        <h3> {this.props.reduxStore.comment} </h3>
        <button id="submitBtn" onClick={this.onSubmit}>
          Submit
        </button>
      </section>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore: reduxStore.feedbackCategory,
});

export default connect(mapStateToProps)(withRouter(Review));
