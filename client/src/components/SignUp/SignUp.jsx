import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            Username
            <input type="text" name="username" onChange={this.handleChange} />
          </label>

          <label htmlFor="email">
            Email
            <input type="email" name="email" onChange={this.handleChange} />
          </label>

          <label htmlFor="password">
            Password
            <input type="text" name="password" onChange={this.handleChange} />
          </label>

          <label htmlFor="password">
            Password
            <input type="text" name="password" onChange={this.handleChange} />
          </label>

          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}
