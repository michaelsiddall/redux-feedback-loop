import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "../Comment/Comment.css";

class Comment extends Component {
  onNext = () => {
    console.log("in onNext");
    console.log("this.props.history", this.props.history);

    this.props.history.push("/review");
  };

  onChangeComment = (event) => {
    console.log("payload is", event.target.value);
    this.props.dispatch({
      type: "SET_COMMENT",
      payload: event.target.value,
    });
  };
  render() {
    return (
      <section>
        <h1>Any comments you want to leave?</h1>
        <br />
        <h5>Comments?</h5>

        <input
          id="commentBox"
          type="text"
          placeholder="Please leave your comments here"
          onChange={this.onChangeComment}
        ></input>
        <button id="nextCommentBtn" onClick={this.onNext}>
          Next
        </button>
      </section>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore,
});

export default connect(mapStateToProps)(withRouter(Comment));
