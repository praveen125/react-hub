import React, { Component } from "react";

export default class Name extends Component {
  state = {
    name: "praveen",
    show: true,
  };
  hide = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        {this.state.show ? <h1>praveen</h1> : ""}

        <button onClick={this.hide}>click me</button>
      </div>
    );
  }
}
