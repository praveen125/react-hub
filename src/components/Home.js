import React, { Component } from "react";

export default class Home extends Component {
  state = {
    text: "",
    list: [],
  };
  onDisplay = (e) => {
    this.setState({ text: e.target.value });
    console.log(this.state.text);
  };
  onShown = () => {
    this.setState({ list: [...this.state.list, this.state.text], text: "" });
  };

  render() {
    return (
      <div className="logo">
        <h1>FOOD ITEMS</h1>
        <br />
        <label className="items">Items:</label>
        <br />
        <input
          className="home"
          onChange={this.onDisplay}
          value={this.state.text}
        />
        <button className="add" onClick={this.onShown}>
          {" "}
          Add{" "}
        </button>
        {this.state.list.map((item) => (
          <h1>{item}</h1>
        ))}
      </div>
    );
  }
}
