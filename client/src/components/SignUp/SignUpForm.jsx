import React, { PureComponent } from "react";

export default class SignUpForm extends PureComponent {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            Username
            <input
              type="text"
              name="username"
              value={this.state.username || ""}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              value={this.state.email || ""}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              type="text"
              name="password"
              value={this.state.password || ""}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="password">
            Confirm password
            <input
              type="text"
              name="confirmPassword"
              value={this.state.username || ""}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}
