import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Comment extends Component {
  onNext = () => {
    console.log("in onNext");
    console.log("this.props.history", this.props.history);

    this.props.history.push("/review");
  };

  handleChange = (event, property) => {
    console.log("in handleChangeFor:", property, event.target.value);
    this.setState({
      ...this.state,
      [property]: event.target.value,
    });
  };
  render() {
    return (
      <section>
        <h1>Any comments you want to leave?</h1>
        <br />
        <h5>Comments?</h5>

        <input
          type="text"
          placeholder="Comments"
          onChange={(event) => this.handleChange(event, "Comments")}
        ></input>
        <button onClick={this.onNext}>Next</button>
      </section>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore,
});

export default connect(mapStateToProps)(withRouter(Comment));
