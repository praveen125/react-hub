import React, { Component } from "react";

class Sign extends Component {
  state = {
    email: "",
    password: "",
  };
  onDisplay = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChange = (e) => {
    e.preventDefault();
    console.log();
  };

  render() {
    return (
      <div className="sign">
        <div className="userName">
          <label>Email:</label>

          <input
            type="text"
            name="email"
            placeholder="email...."
            onChange={this.onDisplay}
            value={this.state.email}
          />
        </div>
        <div className="password">
          <label>Password:</label>

          <input
            type="text"
            name="password"
            placeholder="password....."
            onChange={this.onDisplay}
            value={this.state.password}
          />
        </div>
        <button className="btn btn-primary" onChange={this.handleChange}>
          Submit
        </button>
      </div>
    );
  }
}

export default Sign;
