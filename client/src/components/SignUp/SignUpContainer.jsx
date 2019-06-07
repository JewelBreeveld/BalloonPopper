import React, { PureComponent } from "react";
import SignUpForm from "./SignUpForm";

class SignUpContainer extends PureComponent {
  render() {
    return (
      <div>
        <SignUpForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default SignUpContainer;
