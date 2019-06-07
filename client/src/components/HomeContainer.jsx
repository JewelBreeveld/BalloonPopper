import React, { Component } from "react";

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.history.push("/login")}>Login</button>
        <button onClick={() => this.props.history.push("/signup")}>
          SignUp
        </button>
      </div>
    );
  }
}

export default HomeContainer;
